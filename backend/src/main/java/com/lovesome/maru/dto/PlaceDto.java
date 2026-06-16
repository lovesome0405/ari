package com.lovesome.maru.dto;

public record PlaceDto(
    String id,
    LocalizedTextDto name,
    String category,
    String address,
    Double lat,
    Double lng,
    LocalizedTextDto description,
    String publicDataSource
) {
}
