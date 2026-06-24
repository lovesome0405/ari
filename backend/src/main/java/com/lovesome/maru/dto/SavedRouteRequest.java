package com.lovesome.maru.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record SavedRouteRequest(
    @NotBlank
    @Size(max = 120)
    String routeId,

    @NotBlank
    @Size(max = 255)
    String routeTitle,

    @Size(max = 20)
    String language,

    @Size(max = 120)
    String theme,

    String memo
) {
}
