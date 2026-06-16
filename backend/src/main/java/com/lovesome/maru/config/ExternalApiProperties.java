package com.lovesome.maru.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "maru.external")
public record ExternalApiProperties(
    Provider openai,
    Provider tourApi,
    Provider seoulOpenData
) {
  public record Provider(String apiKey, String serviceKey, String baseUrl) {
  }
}
