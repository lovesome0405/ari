package com.lovesome.maru.service;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.lovesome.maru.config.AuthProperties;
import java.util.Collections;
import java.util.Locale;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class GoogleIdentityService {

  private final AuthProperties authProperties;
  private final GoogleIdTokenVerifier verifier;

  public GoogleIdentityService(AuthProperties authProperties) {
    this.authProperties = authProperties;
    this.verifier = createVerifier(authProperties);
  }

  public boolean isEnabled() {
    return authProperties.getGoogle().isEnabled()
        && authProperties.getGoogle().getWebClientId() != null
        && !authProperties.getGoogle().getWebClientId().isBlank()
        && verifier != null;
  }

  public String getPublicClientId() {
    return isEnabled() ? authProperties.getGoogle().getWebClientId().trim() : "";
  }

  public GoogleProfile verify(String credential) {
    if (!isEnabled()) {
      throw new AuthException(
          HttpStatus.SERVICE_UNAVAILABLE,
          "google_login_disabled",
          "Google 로그인이 아직 설정되지 않았습니다."
      );
    }

    try {
      GoogleIdToken idToken = verifier.verify(credential);
      if (idToken == null) {
        throw new AuthException(HttpStatus.UNAUTHORIZED, "invalid_google_token", "Google 로그인 검증에 실패했습니다.");
      }

      GoogleIdToken.Payload payload = idToken.getPayload();
      String email = normalize(payload.getEmail());
      if (email.isBlank()) {
        throw new AuthException(HttpStatus.UNAUTHORIZED, "missing_google_email", "Google 계정 이메일을 확인할 수 없습니다.");
      }

      boolean emailVerified = isTrue(payload.getEmailVerified());
      String hostedDomain = normalize((String) payload.get("hd"));
      boolean authoritativeEmail = email.toLowerCase(Locale.ROOT).endsWith("@gmail.com")
          || (emailVerified && !hostedDomain.isBlank());

      return new GoogleProfile(
          payload.getSubject(),
          email,
          emailVerified,
          normalize((String) payload.get("name")),
          normalize((String) payload.get("picture")),
          normalize((String) payload.get("locale")),
          hostedDomain,
          authoritativeEmail
      );
    } catch (AuthException exception) {
      throw exception;
    } catch (Exception exception) {
      throw new AuthException(HttpStatus.BAD_GATEWAY, "google_verification_failed", "Google 로그인 검증 중 오류가 발생했습니다.");
    }
  }

  private GoogleIdTokenVerifier createVerifier(AuthProperties authProperties) {
    String webClientId = authProperties.getGoogle().getWebClientId();
    if (webClientId == null || webClientId.isBlank()) return null;

    try {
      return new GoogleIdTokenVerifier.Builder(
          GoogleNetHttpTransport.newTrustedTransport(),
          GsonFactory.getDefaultInstance()
      )
          .setAudience(Collections.singletonList(webClientId.trim()))
          .build();
    } catch (Exception exception) {
      return null;
    }
  }

  private boolean isTrue(Object value) {
    if (value instanceof Boolean bool) return bool;
    return Boolean.parseBoolean(String.valueOf(value));
  }

  private String normalize(String value) {
    return value == null ? "" : value.trim();
  }

  public record GoogleProfile(
      String subject,
      String email,
      boolean emailVerified,
      String name,
      String pictureUrl,
      String locale,
      String hostedDomain,
      boolean authoritativeEmail
  ) {
  }
}
