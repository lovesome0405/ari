package com.lovesome.maru.security;

import com.lovesome.maru.config.AuthProperties;
import com.lovesome.maru.domain.UserAccount;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.time.Instant;
import java.util.Date;
import javax.crypto.SecretKey;
import org.springframework.stereotype.Service;

@Service
public class JwtService {

  private final AuthProperties authProperties;
  private final SecretKey secretKey;

  public JwtService(AuthProperties authProperties) {
    this.authProperties = authProperties;
    this.secretKey = Keys.hmacShaKeyFor(authProperties.getJwt().getSecret().getBytes(StandardCharsets.UTF_8));
  }

  public String issueAccessToken(UserAccount user) {
    Instant now = Instant.now();
    Instant expiresAt = now.plus(accessTokenDuration());

    return Jwts.builder()
        .issuer(authProperties.getJwt().getIssuer())
        .subject(user.getId())
        .claim("email", user.getEmail())
        .claim("role", user.getRole().name())
        .issuedAt(Date.from(now))
        .expiration(Date.from(expiresAt))
        .signWith(secretKey)
        .compact();
  }

  public String extractUserId(String token) {
    return parseClaims(token).getSubject();
  }

  public long getAccessTokenTtlSeconds() {
    return accessTokenDuration().toSeconds();
  }

  private Claims parseClaims(String token) {
    return Jwts.parser()
        .verifyWith(secretKey)
        .requireIssuer(authProperties.getJwt().getIssuer())
        .build()
        .parseSignedClaims(token)
        .getPayload();
  }

  private Duration accessTokenDuration() {
    return Duration.ofMinutes(Math.max(5, authProperties.getJwt().getAccessTokenMinutes()));
  }
}
