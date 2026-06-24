package com.lovesome.maru.dto;

import jakarta.validation.constraints.NotBlank;

public record GoogleLoginRequest(
    @NotBlank(message = "Google credential이 비어 있습니다.")
    String credential
) {
}
