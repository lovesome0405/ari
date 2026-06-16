package com.lovesome.maru.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "public_data_sources")
public class PublicDataSource {

  @Id
  private String id;

  @Column(nullable = false)
  private String name;

  private String provider;

  @Column(name = "use_for_json", columnDefinition = "json")
  private String useForJson;

  @Column(name = "use_description", columnDefinition = "TEXT")
  private String useDescription;

  @Column(name = "connected_feature", columnDefinition = "TEXT")
  private String connectedFeature;

  @Column(name = "current_status", columnDefinition = "TEXT")
  private String currentStatus;

  @Column(name = "future_integration", columnDefinition = "TEXT")
  private String futureIntegration;

  public String getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getProvider() {
    return provider;
  }

  public String getUseForJson() {
    return useForJson;
  }

  public String getUseDescription() {
    return useDescription;
  }

  public String getConnectedFeature() {
    return connectedFeature;
  }

  public String getCurrentStatus() {
    return currentStatus;
  }

  public String getFutureIntegration() {
    return futureIntegration;
  }
}
