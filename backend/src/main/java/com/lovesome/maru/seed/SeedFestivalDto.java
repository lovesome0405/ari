package com.lovesome.maru.seed;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record SeedFestivalDto(
    String id,
    SeedLocalizedTextDto title,
    String category,
    String district,
    SeedLocalizedTextDto venue,
    String dateType,
    List<String> recommendedFor,
    List<String> relatedCourseIds,
    List<String> relatedPlaceIds,
    String publicDataSource,
    String aiUse
) {
}
