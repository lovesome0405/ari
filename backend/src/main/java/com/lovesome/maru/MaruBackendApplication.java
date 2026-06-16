package com.lovesome.maru;

import com.lovesome.maru.config.ExternalApiProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(ExternalApiProperties.class)
public class MaruBackendApplication {

  public static void main(String[] args) {
    SpringApplication.run(MaruBackendApplication.class, args);
  }
}
