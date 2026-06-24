package com.lovesome.maru.dto;

public record AiPhotoTransformResponse(
    String imageDataUrl,
    String mimeType,
    String model,
    String prompt,
    String revisedPrompt,
    String styleLabel,
    String backgroundLabel,
    String intensityLabel,
    String size
) {
}
