package com.lovesome.maru.seed;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.JsonNode;
import java.util.List;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public record SeedCourseDto(
    String id,
    SeedLocalizedTextDto title,
    String theme,
    List<String> target,
    String duration,
    String budget,
    String indoorOutdoor,
    List<String> recommendedTime,
    Integer score,
    SeedLocalizedTextDto walking,
    SeedLocalizedTextDto fee,
    List<SeedPlaceDto> places,
    SeedLocalizedTextDto aiSummary,
    SeedLocalizedTextDto reason,
    SeedLocalizedTextDto tip,
    JsonNode keywords,
    String image,
    String imagePrompt,
    String publicDataSource,
    String source,
    Map<String, String> mapLinks
) {
}
