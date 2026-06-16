package com.lovesome.maru.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "places")
public class Place {

  @Id
  private String id;

  @Column(name = "name_ko", nullable = false)
  private String nameKo;

  @Column(name = "name_en")
  private String nameEn;

  private String category;
  private String address;
  private Double lat;
  private Double lng;

  @Column(name = "description_ko", columnDefinition = "TEXT")
  private String descriptionKo;

  @Column(name = "description_en", columnDefinition = "TEXT")
  private String descriptionEn;

  @Column(name = "public_data_source")
  private String publicDataSource;

  public String getId() {
    return id;
  }

  public String getNameKo() {
    return nameKo;
  }

  public String getNameEn() {
    return nameEn;
  }

  public String getCategory() {
    return category;
  }

  public String getAddress() {
    return address;
  }

  public Double getLat() {
    return lat;
  }

  public Double getLng() {
    return lng;
  }

  public String getDescriptionKo() {
    return descriptionKo;
  }

  public String getDescriptionEn() {
    return descriptionEn;
  }

  public String getPublicDataSource() {
    return publicDataSource;
  }
}
