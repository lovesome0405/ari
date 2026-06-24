package com.lovesome.maru.dto;

import java.time.LocalDateTime;

public record SavedRouteResponse(
    Long id,
    String routeId,
    String routeTitle,
    String language,
    String theme,
    String memo,
    LocalDateTime createdAt
) {
}
