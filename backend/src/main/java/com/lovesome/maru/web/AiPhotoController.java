package com.lovesome.maru.web;

import com.lovesome.maru.dto.AiPhotoTransformResponse;
import com.lovesome.maru.dto.ApiErrorResponse;
import com.lovesome.maru.service.AiPhotoException;
import com.lovesome.maru.service.AiPhotoService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/ai-photo")
public class AiPhotoController {

  private final AiPhotoService aiPhotoService;

  public AiPhotoController(AiPhotoService aiPhotoService) {
    this.aiPhotoService = aiPhotoService;
  }

  @PostMapping(
      path = "/transform",
      consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  public AiPhotoTransformResponse transform(
      @RequestParam("image") MultipartFile image,
      @RequestParam(name = "styleId", required = false) String styleId,
      @RequestParam(name = "backgroundId", required = false) String backgroundId,
      @RequestParam(name = "intensity", required = false) String intensity,
      @RequestParam(name = "customPrompt", required = false) String customPrompt
  ) {
    return aiPhotoService.transform(image, styleId, backgroundId, intensity, customPrompt);
  }

  @ExceptionHandler(AiPhotoException.class)
  public ResponseEntity<ApiErrorResponse> handleAiPhotoException(AiPhotoException exception) {
    return ResponseEntity
        .status(exception.getStatus())
        .body(new ApiErrorResponse(exception.getError(), exception.getMessage()));
  }
}
