package com.lovesome.maru.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lovesome.maru.domain.Course;
import com.lovesome.maru.domain.CoursePlace;
import com.lovesome.maru.domain.Festival;
import com.lovesome.maru.domain.Heritage;
import com.lovesome.maru.domain.Place;
import com.lovesome.maru.domain.PublicDataSource;
import com.lovesome.maru.dto.CourseDto;
import com.lovesome.maru.dto.FestivalDto;
import com.lovesome.maru.dto.HeritageDto;
import com.lovesome.maru.dto.KeywordDto;
import com.lovesome.maru.dto.LocalizedTextDto;
import com.lovesome.maru.dto.PlaceDto;
import com.lovesome.maru.dto.PublicDataSourceDto;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import org.springframework.stereotype.Component;

@Component
public class CatalogMapper {

  private final ObjectMapper objectMapper;

  public CatalogMapper(ObjectMapper objectMapper) {
    this.objectMapper = objectMapper;
  }

  public CourseDto toCourseDto(Course course) {
    List<PlaceDto> places = course.getCoursePlaces().stream()
        .map(CoursePlace::getPlace)
        .filter(Objects::nonNull)
        .map(this::toPlaceDto)
        .toList();

    return new CourseDto(
        course.getId(),
        text(course.getTitleKo(), course.getTitleEn()),
        course.getTheme(),
        readStringList(course.getTargetJson()),
        course.getDuration(),
        course.getBudget(),
        course.getIndoorOutdoor(),
        readStringList(course.getRecommendedTimeJson()),
        course.getScore(),
        text(course.getWalkingKo(), course.getWalkingEn()),
        text(course.getFeeKo(), course.getFeeEn()),
        places,
        text(course.getAiSummaryKo(), course.getAiSummaryEn()),
        text(course.getReasonKo(), course.getReasonEn()),
        text(course.getTipKo(), course.getTipEn()),
        readKeywords(course.getKeywordsJson()),
        course.getImage(),
        course.getImagePrompt(),
        course.getPublicDataSource(),
        course.getSource(),
        readStringMap(course.getMapLinksJson())
    );
  }

  public PlaceDto toPlaceDto(Place place) {
    return new PlaceDto(
        place.getId(),
        text(place.getNameKo(), place.getNameEn()),
        place.getCategory(),
        place.getAddress(),
        place.getLat(),
        place.getLng(),
        text(place.getDescriptionKo(), place.getDescriptionEn()),
        place.getPublicDataSource()
    );
  }

  public FestivalDto toFestivalDto(Festival festival) {
    return new FestivalDto(
        festival.getId(),
        text(festival.getTitleKo(), festival.getTitleEn()),
        festival.getCategory(),
        festival.getDistrict(),
        text(festival.getVenueKo(), festival.getVenueEn()),
        festival.getDateType(),
        readStringList(festival.getRecommendedForJson()),
        readStringList(festival.getRelatedCourseIdsJson()),
        readStringList(festival.getRelatedPlaceIdsJson()),
        festival.getPublicDataSource(),
        festival.getAiUse()
    );
  }

  public HeritageDto toHeritageDto(Heritage heritage) {
    return new HeritageDto(
        heritage.getId(),
        text(heritage.getNameKo(), heritage.getNameEn()),
        heritage.getHeritageType(),
        heritage.getDistrict(),
        heritage.getAddress(),
        heritage.getLat(),
        heritage.getLng(),
        readStringList(heritage.getInterpretationKeywordsJson()),
        heritage.getPublicDataSource(),
        heritage.getAiInterpretationRole()
    );
  }

  public PublicDataSourceDto toPublicDataSourceDto(PublicDataSource source) {
    return new PublicDataSourceDto(
        source.getId(),
        source.getName(),
        source.getProvider(),
        readStringList(source.getUseForJson()),
        source.getUseDescription(),
        source.getConnectedFeature(),
        source.getCurrentStatus(),
        source.getFutureIntegration()
    );
  }

  private LocalizedTextDto text(String ko, String en) {
    return new LocalizedTextDto(ko, en);
  }

  private List<String> readStringList(String json) {
    if (json == null || json.isBlank()) return List.of();
    try {
      JsonNode root = objectMapper.readTree(json);
      if (!root.isArray()) return List.of();
      List<String> values = new ArrayList<>();
      for (JsonNode item : root) {
        if (item.isTextual()) values.add(item.asText());
      }
      return values;
    } catch (Exception ignored) {
      return List.of();
    }
  }

  private Map<String, String> readStringMap(String json) {
    if (json == null || json.isBlank()) return Map.of();
    try {
      JsonNode root = objectMapper.readTree(json);
      if (!root.isObject()) return Map.of();
      Map<String, String> values = new LinkedHashMap<>();
      root.fields().forEachRemaining(entry -> values.put(entry.getKey(), entry.getValue().asText("")));
      return values;
    } catch (Exception ignored) {
      return Map.of();
    }
  }

  private List<KeywordDto> readKeywords(String json) {
    if (json == null || json.isBlank()) return List.of();
    try {
      JsonNode root = objectMapper.readTree(json);
      if (!root.isArray()) return List.of();
      List<KeywordDto> keywords = new ArrayList<>();
      for (JsonNode item : root) {
        String name = item.path("name").asText("");
        JsonNode description = item.path("description");
        keywords.add(new KeywordDto(
            name,
            text(description.path("ko").asText(""), description.path("en").asText(""))
        ));
      }
      return keywords;
    } catch (Exception ignored) {
      return List.of();
    }
  }
}
