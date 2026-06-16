package com.lovesome.maru.dto;

import java.util.List;

public record PublicDataSourceDto(
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
