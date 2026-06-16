package com.lovesome.maru.dto;

import java.util.List;

public record FestivalDto(
    String id,
    LocalizedTextDto title,
    String category,
    String district,
    LocalizedTextDto venue,
    String dateType,
    List<String> recommendedFor,
    List<String> relatedCourseIds,
    List<String> relatedPlaceIds,
    String publicDataSource,
    String aiUse
) {
}
