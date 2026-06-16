package com.lovesome.maru.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "places")
public class Place {

  @Id
  @Column(length = 120)
  private String id;

  @Column(name = "name_ko", nullable = false)
  private String nameKo;

  @Column(name = "name_en")
  private String nameEn;

  @Column(length = 120)
  private String category;

  @Column(length = 500)
  private String address;

  @Column(precision = 10, scale = 7)
  private BigDecimal lat;

  @Column(precision = 10, scale = 7)
  private BigDecimal lng;

  @Column(name = "description_ko", columnDefinition = "TEXT")
  private String descriptionKo;

  @Column(name = "description_en", columnDefinition = "TEXT")
  private String descriptionEn;

  @Column(name = "public_data_source", length = 500)
  private String publicDataSource;

  protected Place() {
  }

  public static Place create(
      String id,
      String nameKo,
      String nameEn,
      String category,
      String address,
      Double lat,
      Double lng,
      String descriptionKo,
      String descriptionEn,
      String publicDataSource
  ) {
    Place place = new Place();
    place.id = id;
    place.nameKo = nameKo;
    place.nameEn = nameEn;
    place.category = category;
    place.address = address;
    place.lat = decimal(lat);
    place.lng = decimal(lng);
    place.descriptionKo = descriptionKo;
    place.descriptionEn = descriptionEn;
    place.publicDataSource = publicDataSource;
    return place;
  }

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
    return lat == null ? null : lat.doubleValue();
  }

  public Double getLng() {
    return lng == null ? null : lng.doubleValue();
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

  private static BigDecimal decimal(Double value) {
    return value == null ? null : BigDecimal.valueOf(value);
  }
}
