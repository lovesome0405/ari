package com.lovesome.maru.dto;

import java.util.List;
import java.util.Map;

public record CourseDto(
    String id,
    LocalizedTextDto title,
    String theme,
    List<String> target,
    String duration,
    String budget,
    String indoorOutdoor,
    List<String> recommendedTime,
    Integer score,
    LocalizedTextDto walking,
    LocalizedTextDto fee,
    List<PlaceDto> places,
    LocalizedTextDto aiSummary,
    LocalizedTextDto reason,
    LocalizedTextDto tip,
    List<KeywordDto> keywords,
    String image,
    String imagePrompt,
    String publicDataSource,
    String source,
    Map<String, String> mapLinks
) {
}
