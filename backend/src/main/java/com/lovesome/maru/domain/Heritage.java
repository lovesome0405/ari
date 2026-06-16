package com.lovesome.maru.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "heritage")
public class Heritage {

  @Id
  @Column(length = 120)
  private String id;

  @Column(name = "name_ko", nullable = false)
  private String nameKo;

  @Column(name = "name_en")
  private String nameEn;

  @Column(name = "heritage_type", length = 120)
  private String heritageType;

  @Column(length = 120)
  private String district;

  @Column(length = 500)
  private String address;

  @Column(precision = 10, scale = 7)
  private BigDecimal lat;

  @Column(precision = 10, scale = 7)
  private BigDecimal lng;

  @Column(name = "interpretation_keywords_json", columnDefinition = "json")
  private String interpretationKeywordsJson;

  @Column(name = "public_data_source", length = 500)
  private String publicDataSource;

  @Column(name = "ai_interpretation_role", columnDefinition = "TEXT")
  private String aiInterpretationRole;

  protected Heritage() {
  }

  public static Heritage create(
      String id,
      String nameKo,
      String nameEn,
      String heritageType,
      String district,
      String address,
      Double lat,
      Double lng,
      String interpretationKeywordsJson,
      String publicDataSource,
      String aiInterpretationRole
  ) {
    Heritage heritage = new Heritage();
    heritage.id = id;
    heritage.nameKo = nameKo;
    heritage.nameEn = nameEn;
    heritage.heritageType = heritageType;
    heritage.district = district;
    heritage.address = address;
    heritage.lat = decimal(lat);
    heritage.lng = decimal(lng);
    heritage.interpretationKeywordsJson = interpretationKeywordsJson;
    heritage.publicDataSource = publicDataSource;
    heritage.aiInterpretationRole = aiInterpretationRole;
    return heritage;
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

  public String getHeritageType() {
    return heritageType;
  }

  public String getDistrict() {
    return district;
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

  public String getInterpretationKeywordsJson() {
    return interpretationKeywordsJson;
  }

  public String getPublicDataSource() {
    return publicDataSource;
  }

  public String getAiInterpretationRole() {
    return aiInterpretationRole;
  }

  private static BigDecimal decimal(Double value) {
    return value == null ? null : BigDecimal.valueOf(value);
  }
}
