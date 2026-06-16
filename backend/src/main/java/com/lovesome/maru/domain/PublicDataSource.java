package com.lovesome.maru.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "public_data_sources")
public class PublicDataSource {

  @Id
  @Column(length = 120)
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

  protected PublicDataSource() {
  }

  public static PublicDataSource create(
      String id,
      String name,
      String provider,
      String useForJson,
      String useDescription,
      String connectedFeature,
      String currentStatus,
      String futureIntegration
  ) {
    PublicDataSource source = new PublicDataSource();
    source.id = id;
    source.name = name;
    source.provider = provider;
    source.useForJson = useForJson;
    source.useDescription = useDescription;
    source.connectedFeature = connectedFeature;
    source.currentStatus = currentStatus;
    source.futureIntegration = futureIntegration;
    return source;
  }

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
