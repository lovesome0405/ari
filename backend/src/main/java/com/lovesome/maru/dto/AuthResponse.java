package com.lovesome.maru.dto;

public record AuthResponse(
    String accessToken,
    long expiresInSeconds,
    AuthUserResponse user
) {
}
