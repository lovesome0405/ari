package com.lovesome.maru.dto;

public record AuthUserResponse(
    String id,
    String email,
    String displayName,
    String role,
    boolean googleLinked,
    boolean localLoginEnabled,
    boolean emailVerified,
    String pictureUrl
) {
}
