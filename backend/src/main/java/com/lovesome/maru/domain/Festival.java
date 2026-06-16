package com.lovesome.maru.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "festivals")
public class Festival {

  @Id
  @Column(length = 120)
  private String id;

  @Column(name = "title_ko", nullable = false)
  private String titleKo;

  @Column(name = "title_en")
  private String titleEn;

  @Column(length = 120)
  private String category;

  @Column(length = 120)
  private String district;

  @Column(name = "venue_ko")
  private String venueKo;

  @Column(name = "venue_en")
  private String venueEn;

  @Column(name = "date_type", length = 120)
  private String dateType;

  @Column(name = "recommended_for_json", columnDefinition = "json")
  private String recommendedForJson;

  @Column(name = "related_course_ids_json", columnDefinition = "json")
  private String relatedCourseIdsJson;

  @Column(name = "related_place_ids_json", columnDefinition = "json")
  private String relatedPlaceIdsJson;

  @Column(name = "public_data_source", length = 500)
  private String publicDataSource;

  @Column(name = "ai_use", columnDefinition = "TEXT")
  private String aiUse;

  protected Festival() {
  }

  public static Festival create(
      String id,
      String titleKo,
      String titleEn,
      String category,
      String district,
      String venueKo,
      String venueEn,
      String dateType,
      String recommendedForJson,
      String relatedCourseIdsJson,
      String relatedPlaceIdsJson,
      String publicDataSource,
      String aiUse
  ) {
    Festival festival = new Festival();
    festival.id = id;
    festival.titleKo = titleKo;
    festival.titleEn = titleEn;
    festival.category = category;
    festival.district = district;
    festival.venueKo = venueKo;
    festival.venueEn = venueEn;
    festival.dateType = dateType;
    festival.recommendedForJson = recommendedForJson;
    festival.relatedCourseIdsJson = relatedCourseIdsJson;
    festival.relatedPlaceIdsJson = relatedPlaceIdsJson;
    festival.publicDataSource = publicDataSource;
    festival.aiUse = aiUse;
    return festival;
  }

  public String getId() {
    return id;
  }

  public String getTitleKo() {
    return titleKo;
  }

  public String getTitleEn() {
    return titleEn;
  }

  public String getCategory() {
    return category;
  }

  public String getDistrict() {
    return district;
  }

  public String getVenueKo() {
    return venueKo;
  }

  public String getVenueEn() {
    return venueEn;
  }

  public String getDateType() {
    return dateType;
  }

  public String getRecommendedForJson() {
    return recommendedForJson;
  }

  public String getRelatedCourseIdsJson() {
    return relatedCourseIdsJson;
  }

  public String getRelatedPlaceIdsJson() {
    return relatedPlaceIdsJson;
  }

  public String getPublicDataSource() {
    return publicDataSource;
  }

  public String getAiUse() {
    return aiUse;
  }
}
