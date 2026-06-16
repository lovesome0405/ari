package com.lovesome.maru.seed;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record SeedPlaceDto(
    String id,
    SeedLocalizedTextDto name,
    String category,
    String address,
    Double lat,
    Double lng,
    SeedLocalizedTextDto description,
    String publicDataSource
) {
}
