package com.lovesome.maru.seed;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record SeedHeritageDto(
    String id,
    SeedLocalizedTextDto name,
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
