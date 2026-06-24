package com.lovesome.maru.service;

import org.springframework.http.HttpStatus;

public class AiPhotoException extends RuntimeException {

  private final HttpStatus status;
  private final String error;

  public AiPhotoException(HttpStatus status, String error, String message) {
    super(message);
    this.status = status;
    this.error = error;
  }

  public HttpStatus getStatus() {
    return status;
  }

  public String getError() {
    return error;
  }
}
