package com.lovesome.maru.web;

import com.lovesome.maru.dto.ApiErrorResponse;
import com.lovesome.maru.service.AiPhotoException;
import com.lovesome.maru.service.AuthException;
import java.util.Objects;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ApiExceptionHandler {

  @ExceptionHandler(AuthException.class)
  public ResponseEntity<ApiErrorResponse> handleAuthException(AuthException exception) {
    return ResponseEntity
        .status(exception.getStatus())
        .body(new ApiErrorResponse(exception.getError(), exception.getMessage()));
  }

  @ExceptionHandler(AiPhotoException.class)
  public ResponseEntity<ApiErrorResponse> handleAiPhotoException(AiPhotoException exception) {
    return ResponseEntity
        .status(exception.getStatus())
        .body(new ApiErrorResponse(exception.getError(), exception.getMessage()));
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<ApiErrorResponse> handleValidationException(MethodArgumentNotValidException exception) {
    String message = exception.getBindingResult().getFieldErrors().stream()
        .map((fieldError) -> fieldError.getDefaultMessage())
        .filter(Objects::nonNull)
        .findFirst()
        .orElse("입력값을 다시 확인해 주세요.");

    return ResponseEntity
        .status(HttpStatus.BAD_REQUEST)
        .body(new ApiErrorResponse("validation_error", message));
  }
}
