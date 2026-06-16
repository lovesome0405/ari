package com.lovesome.maru.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderBy;
import jakarta.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "courses")
public class Course {

  @Id
  @Column(length = 120)
  private String id;

  @Column(name = "display_order")
  private Integer displayOrder;

  @Column(name = "title_ko", nullable = false)
  private String titleKo;

  @Column(name = "title_en")
  private String titleEn;

  @Column(length = 120)
  private String theme;

  @Column(name = "target_json", columnDefinition = "json")
  private String targetJson;

  @Column(length = 80)
  private String duration;

  @Column(length = 80)
  private String budget;

  @Column(name = "indoor_outdoor", length = 80)
  private String indoorOutdoor;

  @Column(name = "recommended_time_json", columnDefinition = "json")
  private String recommendedTimeJson;

  private Integer score;

  @Column(name = "walking_ko", length = 120)
  private String walkingKo;

  @Column(name = "walking_en", length = 120)
  private String walkingEn;

  @Column(name = "fee_ko", length = 120)
  private String feeKo;

  @Column(name = "fee_en", length = 120)
  private String feeEn;

  @Column(name = "ai_summary_ko", columnDefinition = "TEXT")
  private String aiSummaryKo;

  @Column(name = "ai_summary_en", columnDefinition = "TEXT")
  private String aiSummaryEn;

  @Column(name = "reason_ko", columnDefinition = "TEXT")
  private String reasonKo;

  @Column(name = "reason_en", columnDefinition = "TEXT")
  private String reasonEn;

  @Column(name = "tip_ko", columnDefinition = "TEXT")
  private String tipKo;

  @Column(name = "tip_en", columnDefinition = "TEXT")
  private String tipEn;

  @Column(name = "keywords_json", columnDefinition = "json")
  private String keywordsJson;

  @Column(length = 500)
  private String image;

  @Column(name = "image_prompt", columnDefinition = "TEXT")
  private String imagePrompt;

  @Column(name = "public_data_source", length = 500)
  private String publicDataSource;

  @Column(length = 500)
  private String source;

  @Column(name = "map_links_json", columnDefinition = "json")
  private String mapLinksJson;

  @OneToMany(mappedBy = "course")
  @OrderBy("sortOrder ASC")
  private List<CoursePlace> coursePlaces = new ArrayList<>();

  protected Course() {
  }

  public static Course create(
      String id,
      Integer displayOrder,
      String titleKo,
      String titleEn,
      String theme,
      String targetJson,
      String duration,
      String budget,
      String indoorOutdoor,
      String recommendedTimeJson,
      Integer score,
      String walkingKo,
      String walkingEn,
      String feeKo,
      String feeEn,
      String aiSummaryKo,
      String aiSummaryEn,
      String reasonKo,
      String reasonEn,
      String tipKo,
      String tipEn,
      String keywordsJson,
      String image,
      String imagePrompt,
      String publicDataSource,
      String source,
      String mapLinksJson
  ) {
    Course course = new Course();
    course.id = id;
    course.displayOrder = displayOrder;
    course.titleKo = titleKo;
    course.titleEn = titleEn;
    course.theme = theme;
    course.targetJson = targetJson;
    course.duration = duration;
    course.budget = budget;
    course.indoorOutdoor = indoorOutdoor;
    course.recommendedTimeJson = recommendedTimeJson;
    course.score = score;
    course.walkingKo = walkingKo;
    course.walkingEn = walkingEn;
    course.feeKo = feeKo;
    course.feeEn = feeEn;
    course.aiSummaryKo = aiSummaryKo;
    course.aiSummaryEn = aiSummaryEn;
    course.reasonKo = reasonKo;
    course.reasonEn = reasonEn;
    course.tipKo = tipKo;
    course.tipEn = tipEn;
    course.keywordsJson = keywordsJson;
    course.image = image;
    course.imagePrompt = imagePrompt;
    course.publicDataSource = publicDataSource;
    course.source = source;
    course.mapLinksJson = mapLinksJson;
    return course;
  }

  public String getId() {
    return id;
  }

  public Integer getDisplayOrder() {
    return displayOrder;
  }

  public String getTitleKo() {
    return titleKo;
  }

  public String getTitleEn() {
    return titleEn;
  }

  public String getTheme() {
    return theme;
  }

  public String getTargetJson() {
    return targetJson;
  }

  public String getDuration() {
    return duration;
  }

  public String getBudget() {
    return budget;
  }

  public String getIndoorOutdoor() {
    return indoorOutdoor;
  }

  public String getRecommendedTimeJson() {
    return recommendedTimeJson;
  }

  public Integer getScore() {
    return score;
  }

  public String getWalkingKo() {
    return walkingKo;
  }

  public String getWalkingEn() {
    return walkingEn;
  }

  public String getFeeKo() {
    return feeKo;
  }

  public String getFeeEn() {
    return feeEn;
  }

  public String getAiSummaryKo() {
    return aiSummaryKo;
  }

  public String getAiSummaryEn() {
    return aiSummaryEn;
  }

  public String getReasonKo() {
    return reasonKo;
  }

  public String getReasonEn() {
    return reasonEn;
  }

  public String getTipKo() {
    return tipKo;
  }

  public String getTipEn() {
    return tipEn;
  }

  public String getKeywordsJson() {
    return keywordsJson;
  }

  public String getImage() {
    return image;
  }

  public String getImagePrompt() {
    return imagePrompt;
  }

  public String getPublicDataSource() {
    return publicDataSource;
  }

  public String getSource() {
    return source;
  }

  public String getMapLinksJson() {
    return mapLinksJson;
  }

  public List<CoursePlace> getCoursePlaces() {
    return coursePlaces;
  }
}
