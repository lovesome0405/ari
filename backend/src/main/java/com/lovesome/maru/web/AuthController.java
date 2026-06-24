package com.lovesome.maru.web;

import com.lovesome.maru.dto.AuthConfigResponse;
import com.lovesome.maru.dto.AuthResponse;
import com.lovesome.maru.dto.AuthUserResponse;
import com.lovesome.maru.dto.GoogleLoginRequest;
import com.lovesome.maru.dto.LoginRequest;
import com.lovesome.maru.dto.RegisterRequest;
import com.lovesome.maru.security.UserAccountPrincipal;
import com.lovesome.maru.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

  private final AuthService authService;

  public AuthController(AuthService authService) {
    this.authService = authService;
  }

  @GetMapping("/config")
  public AuthConfigResponse getConfig() {
    return authService.getAuthConfig();
  }

  @PostMapping("/register")
  public AuthResponse register(@Valid @RequestBody RegisterRequest request) {
    return authService.register(request);
  }

  @PostMapping("/login")
  public AuthResponse login(@Valid @RequestBody LoginRequest request) {
    return authService.login(request);
  }

  @PostMapping("/google")
  public AuthResponse loginWithGoogle(@Valid @RequestBody GoogleLoginRequest request) {
    return authService.loginWithGoogle(request);
  }

  @PostMapping("/google/link")
  public AuthResponse linkGoogle(
      @AuthenticationPrincipal UserAccountPrincipal principal,
      @Valid @RequestBody GoogleLoginRequest request
  ) {
    return authService.linkGoogle(principal.getUserId(), request);
  }

  @GetMapping("/me")
  public AuthUserResponse me(@AuthenticationPrincipal UserAccountPrincipal principal) {
    return authService.getCurrentUser(principal.getUserId());
  }
}
