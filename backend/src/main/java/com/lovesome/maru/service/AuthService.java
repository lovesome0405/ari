package com.lovesome.maru.service;

import com.lovesome.maru.domain.UserAccount;
import com.lovesome.maru.dto.AuthConfigResponse;
import com.lovesome.maru.dto.AuthResponse;
import com.lovesome.maru.dto.AuthUserResponse;
import com.lovesome.maru.dto.GoogleLoginRequest;
import com.lovesome.maru.dto.LoginRequest;
import com.lovesome.maru.dto.RegisterRequest;
import com.lovesome.maru.repository.UserAccountRepository;
import com.lovesome.maru.security.JwtService;
import java.util.Locale;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AuthService {

  private final UserAccountRepository userAccountRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final GoogleIdentityService googleIdentityService;

  public AuthService(
      UserAccountRepository userAccountRepository,
      PasswordEncoder passwordEncoder,
      JwtService jwtService,
      GoogleIdentityService googleIdentityService
  ) {
    this.userAccountRepository = userAccountRepository;
    this.passwordEncoder = passwordEncoder;
    this.jwtService = jwtService;
    this.googleIdentityService = googleIdentityService;
  }

  public AuthResponse register(RegisterRequest request) {
    String email = normalizeEmail(request.email());
    String displayName = normalizeDisplayName(request.displayName(), email);
    String passwordHash = passwordEncoder.encode(request.password());

    UserAccount user = userAccountRepository.findByEmail(email)
        .map((existing) -> attachLocalCredential(existing, displayName, passwordHash))
        .orElseGet(() -> UserAccount.createLocal(email, displayName, passwordHash));

    return buildAuthResponse(userAccountRepository.save(user));
  }

  public AuthResponse login(LoginRequest request) {
    String email = normalizeEmail(request.email());
    UserAccount user = userAccountRepository.findByEmail(email)
        .orElseThrow(() -> new AuthException(HttpStatus.UNAUTHORIZED, "invalid_credentials", "이메일 또는 비밀번호가 올바르지 않습니다."));

    if (!user.hasPassword()) {
      throw new AuthException(
          HttpStatus.UNAUTHORIZED,
          "local_login_unavailable",
          "이 계정은 비밀번호 로그인이 연결되어 있지 않습니다. Google로 로그인하거나 계정 페이지에서 비밀번호를 추가해 주세요."
      );
    }

    if (!passwordEncoder.matches(request.password(), user.getPasswordHash())) {
      throw new AuthException(HttpStatus.UNAUTHORIZED, "invalid_credentials", "이메일 또는 비밀번호가 올바르지 않습니다.");
    }

    return buildAuthResponse(user);
  }

  public AuthResponse loginWithGoogle(GoogleLoginRequest request) {
    GoogleIdentityService.GoogleProfile googleProfile = googleIdentityService.verify(request.credential());

    UserAccount user = userAccountRepository.findByGoogleSubject(googleProfile.subject())
        .map((existing) -> attachGoogleProfile(existing, googleProfile))
        .orElseGet(() -> resolveGoogleByEmailOrCreate(googleProfile));

    return buildAuthResponse(userAccountRepository.save(user));
  }

  public AuthResponse linkGoogle(String currentUserId, GoogleLoginRequest request) {
    UserAccount currentUser = getRequiredUser(currentUserId);
    GoogleIdentityService.GoogleProfile googleProfile = googleIdentityService.verify(request.credential());

    userAccountRepository.findByGoogleSubject(googleProfile.subject())
        .filter((owner) -> !owner.getId().equals(currentUser.getId()))
        .ifPresent((owner) -> {
          throw new AuthException(HttpStatus.CONFLICT, "google_already_linked", "이미 다른 MARU 계정에 연결된 Google 계정입니다.");
        });

    if (!currentUser.getEmail().equalsIgnoreCase(googleProfile.email())) {
      throw new AuthException(
          HttpStatus.CONFLICT,
          "email_mismatch",
          "로그인한 MARU 계정과 같은 이메일의 Google 계정만 연결할 수 있습니다."
      );
    }

    currentUser.attachGoogle(
        googleProfile.subject(),
        googleProfile.name(),
        googleProfile.emailVerified(),
        googleProfile.pictureUrl(),
        googleProfile.locale()
    );
    return buildAuthResponse(userAccountRepository.save(currentUser));
  }

  @Transactional(readOnly = true)
  public AuthUserResponse getCurrentUser(String userId) {
    return toAuthUserResponse(getRequiredUser(userId));
  }

  @Transactional(readOnly = true)
  public AuthConfigResponse getAuthConfig() {
    return new AuthConfigResponse(
        googleIdentityService.isEnabled(),
        googleIdentityService.getPublicClientId()
    );
  }

  private UserAccount attachLocalCredential(UserAccount existing, String displayName, String passwordHash) {
    if (existing.hasPassword()) {
      throw new AuthException(HttpStatus.CONFLICT, "email_in_use", "이미 가입된 이메일입니다. 로그인해 주세요.");
    }

    existing.attachLocalPassword(passwordHash, displayName);
    return existing;
  }

  private UserAccount resolveGoogleByEmailOrCreate(GoogleIdentityService.GoogleProfile googleProfile) {
    return userAccountRepository.findByEmail(normalizeEmail(googleProfile.email()))
        .map((existing) -> {
          if (!existing.isGoogleLinked() && !googleProfile.authoritativeEmail()) {
            throw new AuthException(
                HttpStatus.CONFLICT,
                "google_link_requires_local_login",
                "이 이메일은 먼저 MARU 비밀번호 로그인 후 계정 페이지에서 Google 계정을 연결해 주세요."
            );
          }
          return attachGoogleProfile(existing, googleProfile);
        })
        .orElseGet(() -> UserAccount.createGoogle(
            normalizeEmail(googleProfile.email()),
            normalizeDisplayName(googleProfile.name(), googleProfile.email()),
            googleProfile.subject(),
            googleProfile.emailVerified(),
            googleProfile.pictureUrl(),
            googleProfile.locale()
        ));
  }

  private UserAccount attachGoogleProfile(UserAccount existing, GoogleIdentityService.GoogleProfile googleProfile) {
    if (existing.isGoogleLinked() && !existing.getGoogleSubject().equals(googleProfile.subject())) {
      throw new AuthException(HttpStatus.CONFLICT, "google_subject_mismatch", "이미 다른 Google 계정이 연결되어 있습니다.");
    }

    existing.attachGoogle(
        googleProfile.subject(),
        normalizeDisplayName(googleProfile.name(), googleProfile.email()),
        googleProfile.emailVerified(),
        googleProfile.pictureUrl(),
        googleProfile.locale()
    );
    return existing;
  }

  private AuthResponse buildAuthResponse(UserAccount user) {
    return new AuthResponse(
        jwtService.issueAccessToken(user),
        jwtService.getAccessTokenTtlSeconds(),
        toAuthUserResponse(user)
    );
  }

  private AuthUserResponse toAuthUserResponse(UserAccount user) {
    return new AuthUserResponse(
        user.getId(),
        user.getEmail(),
        user.getDisplayName(),
        user.getRole().name(),
        user.isGoogleLinked(),
        user.hasPassword(),
        user.isEmailVerified(),
        user.getPictureUrl()
    );
  }

  private UserAccount getRequiredUser(String userId) {
    return userAccountRepository.findById(userId)
        .orElseThrow(() -> new AuthException(HttpStatus.UNAUTHORIZED, "user_not_found", "사용자 정보를 찾을 수 없습니다."));
  }

  private String normalizeEmail(String email) {
    String normalized = email == null ? "" : email.trim().toLowerCase(Locale.ROOT);
    if (normalized.isBlank()) {
      throw new AuthException(HttpStatus.BAD_REQUEST, "invalid_email", "이메일을 입력해 주세요.");
    }
    return normalized;
  }

  private String normalizeDisplayName(String displayName, String fallbackEmail) {
    String normalized = displayName == null ? "" : displayName.trim();
    if (!normalized.isBlank()) return normalized;
    int atIndex = fallbackEmail.indexOf('@');
    return atIndex > 0 ? fallbackEmail.substring(0, atIndex) : "MARU 사용자";
  }
}
