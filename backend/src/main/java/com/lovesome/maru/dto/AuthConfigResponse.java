package com.lovesome.maru.dto;

public record AuthConfigResponse(
    boolean googleEnabled,
    String googleClientId
) {
}
