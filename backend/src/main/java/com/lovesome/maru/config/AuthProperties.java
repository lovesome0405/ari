package com.lovesome.maru.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "maru.auth")
public class AuthProperties {

  private final Jwt jwt = new Jwt();
  private final Google google = new Google();

  public Jwt getJwt() {
    return jwt;
  }

  public Google getGoogle() {
    return google;
  }

  public static class Jwt {
    private String secret = "change-this-local-dev-jwt-secret-to-a-long-random-value";
    private String issuer = "maru-backend";
    private long accessTokenMinutes = 720;

    public String getSecret() {
      return secret;
    }

    public void setSecret(String secret) {
      this.secret = secret;
    }

    public String getIssuer() {
      return issuer;
    }

    public void setIssuer(String issuer) {
      this.issuer = issuer;
    }

    public long getAccessTokenMinutes() {
      return accessTokenMinutes;
    }

    public void setAccessTokenMinutes(long accessTokenMinutes) {
      this.accessTokenMinutes = accessTokenMinutes;
    }
  }

  public static class Google {
    private boolean enabled = true;
    private String webClientId = "";

    public boolean isEnabled() {
      return enabled;
    }

    public void setEnabled(boolean enabled) {
      this.enabled = enabled;
    }

    public String getWebClientId() {
      return webClientId;
    }

    public void setWebClientId(String webClientId) {
      this.webClientId = webClientId;
    }
  }
}
