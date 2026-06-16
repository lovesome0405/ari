package com.lovesome.maru.seed;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record SeedLocalizedTextDto(
    String ko,
    String en
) {
}
