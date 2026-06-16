package com.lovesome.maru.seed;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record SeedPublicDataSourceDto(
    String id,
    String name,
    String provider,
    List<String> useFor,
    String useDescription,
    String connectedFeature,
    String currentStatus,
    String futureIntegration
) {
}
