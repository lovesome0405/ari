package com.lovesome.maru.dto;

import java.util.List;

public record HeritageDto(
    String id,
    LocalizedTextDto name,
    String heritageType,
    String district,
    String address,
    Double lat,
    Double lng,
    List<String> interpretationKeywords,
    String publicDataSource,
    String aiInterpretationRole
) {
}
