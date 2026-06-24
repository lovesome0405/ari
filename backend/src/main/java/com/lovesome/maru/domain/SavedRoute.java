package com.lovesome.maru.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "saved_routes")
public class SavedRoute {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "route_id", nullable = false, length = 120)
  private String routeId;

  @Column(name = "route_title", nullable = false)
  private String routeTitle;

  @Column(length = 20)
  private String language;

  @Column(length = 120)
  private String theme;

  @Column(columnDefinition = "TEXT")
  private String memo;

  @CreationTimestamp
  @Column(name = "created_at", nullable = false, updatable = false)
  private LocalDateTime createdAt;

  protected SavedRoute() {
  }

  public static SavedRoute create(
      String routeId,
      String routeTitle,
      String language,
      String theme,
      String memo
  ) {
    SavedRoute savedRoute = new SavedRoute();
    savedRoute.routeId = routeId;
    savedRoute.routeTitle = routeTitle;
    savedRoute.language = language;
    savedRoute.theme = theme;
    savedRoute.memo = memo;
    return savedRoute;
  }

  public Long getId() {
    return id;
  }

  public String getRouteId() {
    return routeId;
  }

  public String getRouteTitle() {
    return routeTitle;
  }

  public String getLanguage() {
    return language;
  }

  public String getTheme() {
    return theme;
  }

  public String getMemo() {
    return memo;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }
}
