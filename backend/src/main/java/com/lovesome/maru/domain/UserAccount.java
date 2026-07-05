package com.lovesome.maru.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "user_accounts")
public class UserAccount {

  @Id
  @Column(length = 36)
  private String id;

  @Column(nullable = false, length = 255, unique = true)
  private String email;

  @Column(name = "password_hash", length = 255)
  private String passwordHash;

  @Column(name = "display_name", nullable = false, length = 120)
  private String displayName;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false, length = 40)
  private UserRole role;

  @Column(name = "google_subject", length = 255, unique = true)
  private String googleSubject;

  @Column(name = "email_verified", nullable = false)
  private boolean emailVerified;

  @Column(name = "picture_url", length = 500)
  private String pictureUrl;

  @Column(length = 40)
  private String locale;

  @Column(name = "created_at", nullable = false)
  private Instant createdAt;

  @Column(name = "updated_at", nullable = false)
  private Instant updatedAt;

  protected UserAccount() {
  }

  public static UserAccount createLocal(String email, String displayName, String passwordHash) {
    UserAccount user = createBase(email, displayName);
    user.passwordHash = passwordHash;
    return user;
  }

  public static UserAccount createGoogle(
      String email,
      String displayName,
      String googleSubject,
      boolean emailVerified,
      String pictureUrl,
      String locale
  ) {
    UserAccount user = createBase(email, displayName);
    user.attachGoogle(googleSubject, displayName, emailVerified, pictureUrl, locale);
    return user;
  }

  private static UserAccount createBase(String email, String displayName) {
    UserAccount user = new UserAccount();
    user.id = UUID.randomUUID().toString();
    user.email = email;
    user.displayName = displayName;
    user.role = UserRole.USER;
    return user;
  }

  public void attachLocalPassword(String passwordHash, String displayName) {
    this.passwordHash = passwordHash;
    if (displayName != null && !displayName.isBlank()) {
      this.displayName = displayName.trim();
    }
  }

  public void attachGoogle(
      String googleSubject,
      String displayName,
      boolean emailVerified,
      String pictureUrl,
      String locale
  ) {
    this.googleSubject = googleSubject;
    if (displayName != null && !displayName.isBlank()) {
      this.displayName = displayName.trim();
    }
    this.emailVerified = this.emailVerified || emailVerified;
    this.pictureUrl = blankToNull(pictureUrl);
    this.locale = blankToNull(locale);
  }

  public boolean hasPassword() {
    return passwordHash != null && !passwordHash.isBlank();
  }

  public boolean isGoogleLinked() {
    return googleSubject != null && !googleSubject.isBlank();
  }

  @PrePersist
  void onCreate() {
    Instant now = Instant.now();
    createdAt = now;
    updatedAt = now;
  }

  @PreUpdate
  void onUpdate() {
    updatedAt = Instant.now();
  }

  public String getId() {
    return id;
  }

  public String getEmail() {
    return email;
  }

  public String getPasswordHash() {
    return passwordHash;
  }

  public String getDisplayName() {
    return displayName;
  }

  public UserRole getRole() {
    return role;
  }

  public String getGoogleSubject() {
    return googleSubject;
  }

  public boolean isEmailVerified() {
    return emailVerified;
  }

  public String getPictureUrl() {
    return pictureUrl;
  }

  public String getLocale() {
    return locale;
  }

  public Instant getCreatedAt() {
    return createdAt;
  }

  public Instant getUpdatedAt() {
    return updatedAt;
  }

  private static String blankToNull(String value) {
    if (value == null) return null;
    String trimmed = value.trim();
    return trimmed.isBlank() ? null : trimmed;
  }
}
