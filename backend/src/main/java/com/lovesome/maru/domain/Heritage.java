package com.lovesome.maru.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "heritage")
public class Heritage {

  @Id
  private String id;

  @Column(name = "name_ko", nullable = false)
  private String nameKo;

  @Column(name = "name_en")
  private String nameEn;

  @Column(name = "heritage_type")
  private String heritageType;

  private String district;
  private String address;
  private Double lat;
  private Double lng;

  @Column(name = "interpretation_keywords_json", columnDefinition = "json")
  private String interpretationKeywordsJson;

  @Column(name = "public_data_source")
  private String publicDataSource;

  @Column(name = "ai_interpretation_role", columnDefinition = "TEXT")
  private String aiInterpretationRole;

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
    return lat;
  }

  public Double getLng() {
    return lng;
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
}
