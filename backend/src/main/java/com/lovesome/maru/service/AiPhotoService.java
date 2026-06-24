package com.lovesome.maru.service;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.lovesome.maru.config.AiPhotoProperties;
import com.lovesome.maru.config.ExternalApiProperties;
import com.lovesome.maru.dto.AiPhotoTransformResponse;
import java.awt.Dimension;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import javax.imageio.ImageIO;
import javax.imageio.ImageReader;
import javax.imageio.stream.ImageInputStream;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientResponseException;
import org.springframework.web.multipart.MultipartFile;

@Service
public class AiPhotoService {

  private static final String DEFAULT_STYLE_ID = "joseon-portrait";
  private static final String DEFAULT_BACKGROUND_ID = "palace-courtyard";
  private static final String DEFAULT_INTENSITY_ID = "balanced";
  private static final String DEFAULT_PORTRAIT_SIZE = "1024x1536";
  private static final String DEFAULT_LANDSCAPE_SIZE = "1536x1024";
  private static final Set<String> SUPPORTED_CONTENT_TYPES = Set.of(
      MediaType.IMAGE_JPEG_VALUE,
      "image/jpg",
      MediaType.IMAGE_PNG_VALUE,
      "image/webp"
  );

  private static final Map<String, Preset> STYLE_PRESETS = Map.of(
      DEFAULT_STYLE_ID,
      new Preset(
          "조선 초상화",
          "Render the subject as a refined Joseon-era portrait with elegant hanbok, premium silk texture, restrained royal colors, and subtle ink-and-color painting detail."
      ),
      "minhwa",
      new Preset(
          "민화풍",
          "Render the scene in a polished Korean minhwa-inspired painting style with decorative brushwork, warm hanji paper texture, and lively traditional motifs."
      ),
      "cinematic-drama",
      new Preset(
          "사극 스틸컷",
          "Render the subject like a premium historical drama still with cinematic lighting, richly detailed costume design, believable skin detail, and a dignified Joseon atmosphere."
      )
  );

  private static final Map<String, Preset> BACKGROUND_PRESETS = Map.of(
      DEFAULT_BACKGROUND_ID,
      new Preset(
          "궁궐 뜰",
          "Replace the background with a grand Joseon palace courtyard, tiled rooflines, stone pathways, and warm late-afternoon light."
      ),
      "hanok-garden",
      new Preset(
          "한옥 정원",
          "Replace the background with a serene hanok garden, layered wooden architecture, pines, paper lantern glow, and quiet traditional depth."
      ),
      "paper-studio",
      new Preset(
          "한지 스튜디오",
          "Replace the background with a premium traditional studio backdrop using hanji folding screens, silk drapery, subtle floral motifs, and soft museum-style lighting."
      )
  );

  private static final Map<String, Preset> INTENSITY_PRESETS = Map.of(
      "faithful",
      new Preset(
          "원본 유지형",
          "Keep the framing very close to the original photo while clearly changing clothing, material texture, palette, and background."
      ),
      DEFAULT_INTENSITY_ID,
      new Preset(
          "균형형",
          "Make the transformation obvious while preserving the same person's identity, expression, pose, camera angle, and overall composition."
      ),
      "bold",
      new Preset(
          "강한 변환형",
          "Push the costume, atmosphere, and setting strongly into a Joseon-world interpretation while keeping the same person clearly recognizable."
      )
  );

  private final RestClient restClient;
  private final ExternalApiProperties externalApiProperties;
  private final AiPhotoProperties aiPhotoProperties;

  public AiPhotoService(
      RestClient.Builder restClientBuilder,
      ExternalApiProperties externalApiProperties,
      AiPhotoProperties aiPhotoProperties
  ) {
    this.externalApiProperties = externalApiProperties;
    this.aiPhotoProperties = aiPhotoProperties;
    this.restClient = restClientBuilder
        .baseUrl(resolveBaseUrl(externalApiProperties))
        .build();
  }

  public AiPhotoTransformResponse transform(
      MultipartFile image,
      String styleId,
      String backgroundId,
      String intensity,
      String customPrompt
  ) {
    validateConfiguration();
    validateImage(image);

    byte[] imageBytes;
    try {
      imageBytes = image.getBytes();
    } catch (IOException exception) {
      throw new AiPhotoException(HttpStatus.BAD_REQUEST, "invalid_image", "이미지 파일을 읽을 수 없습니다.");
    }

    Preset style = resolvePreset(STYLE_PRESETS, styleId, DEFAULT_STYLE_ID);
    Preset background = resolvePreset(BACKGROUND_PRESETS, backgroundId, DEFAULT_BACKGROUND_ID);
    Preset transformIntensity = resolvePreset(INTENSITY_PRESETS, intensity, DEFAULT_INTENSITY_ID);
    String prompt = buildPrompt(style, background, transformIntensity, customPrompt);
    String size = resolveOutputSize(imageBytes);

    OpenAiImageResponse payload = requestEdit(image, imageBytes, prompt, size, true);
    if (payload == null || payload.data() == null || payload.data().isEmpty()) {
      throw new AiPhotoException(HttpStatus.BAD_GATEWAY, "provider_error", "이미지 변환 결과를 받지 못했습니다.");
    }

    OpenAiImageData firstImage = payload.data().get(0);
    if (firstImage == null || firstImage.b64Json() == null || firstImage.b64Json().isBlank()) {
      throw new AiPhotoException(HttpStatus.BAD_GATEWAY, "provider_error", "변환 결과 이미지 데이터가 비어 있습니다.");
    }

    String outputFormat = normalizeOutputFormat(aiPhotoProperties.getOutputFormat());
    String mimeType = outputFormatToMimeType(outputFormat);
    String imageDataUrl = "data:" + mimeType + ";base64," + firstImage.b64Json();

    return new AiPhotoTransformResponse(
        imageDataUrl,
        mimeType,
        normalizeText(aiPhotoProperties.getModel(), "gpt-image-2"),
        prompt,
        normalizeText(firstImage.revisedPrompt(), ""),
        style.label(),
        background.label(),
        transformIntensity.label(),
        size
    );
  }

  private void validateConfiguration() {
    if (!aiPhotoProperties.isEnabled()) {
      throw new AiPhotoException(HttpStatus.SERVICE_UNAVAILABLE, "service_disabled", "AI 이미지 변환 기능이 비활성화되어 있습니다.");
    }

    String apiKey = externalApiProperties.openai() == null ? "" : normalizeText(externalApiProperties.openai().apiKey(), "");
    if (apiKey.isBlank()) {
      throw new AiPhotoException(
          HttpStatus.SERVICE_UNAVAILABLE,
          "missing_api_key",
          "서버에 OPENAI_API_KEY가 설정되어 있지 않아 실제 이미지 변환을 실행할 수 없습니다."
      );
    }
  }

  private void validateImage(MultipartFile image) {
    if (image == null || image.isEmpty()) {
      throw new AiPhotoException(HttpStatus.BAD_REQUEST, "missing_image", "변환할 이미지를 업로드해 주세요.");
    }

    if (image.getSize() > aiPhotoProperties.getMaxUploadBytes()) {
      throw new AiPhotoException(
          HttpStatus.BAD_REQUEST,
          "file_too_large",
          "업로드 이미지는 15MB 이하만 지원합니다."
      );
    }

    String contentType = normalizeText(image.getContentType(), "").toLowerCase(Locale.ROOT);
    if (!SUPPORTED_CONTENT_TYPES.contains(contentType)) {
      throw new AiPhotoException(
          HttpStatus.BAD_REQUEST,
          "unsupported_type",
          "JPG, PNG, WEBP 형식의 이미지만 변환할 수 있습니다."
      );
    }
  }

  private OpenAiImageResponse requestEdit(
      MultipartFile image,
      byte[] imageBytes,
      String prompt,
      String size,
      boolean includeInputFidelity
  ) {
    try {
      return restClient.post()
          .uri("/images/edits")
          .header(HttpHeaders.AUTHORIZATION, "Bearer " + externalApiProperties.openai().apiKey())
          .contentType(MediaType.MULTIPART_FORM_DATA)
          .body(buildRequestBody(image, imageBytes, prompt, size, includeInputFidelity))
          .retrieve()
          .body(OpenAiImageResponse.class);
    } catch (RestClientResponseException exception) {
      String responseBody = normalizeText(exception.getResponseBodyAsString(), "");
      if (includeInputFidelity
          && exception.getStatusCode().value() == 400
          && responseBody.toLowerCase(Locale.ROOT).contains("input_fidelity")) {
        return requestEdit(image, imageBytes, prompt, size, false);
      }

      throw new AiPhotoException(
          HttpStatus.BAD_GATEWAY,
          "provider_error",
          extractProviderMessage(responseBody, exception.getStatusText())
      );
    } catch (Exception exception) {
      throw new AiPhotoException(
          HttpStatus.BAD_GATEWAY,
          "provider_error",
          "이미지 변환 서버에 연결하지 못했습니다. 백엔드와 외부 API 설정을 확인해 주세요."
      );
    }
  }

  private MultiValueMap<String, Object> buildRequestBody(
      MultipartFile image,
      byte[] imageBytes,
      String prompt,
      String size,
      boolean includeInputFidelity
  ) {
    LinkedMultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
    body.add("model", normalizeText(aiPhotoProperties.getModel(), "gpt-image-2"));
    body.add("prompt", prompt);
    body.add("size", size);
    body.add("quality", normalizeText(aiPhotoProperties.getQuality(), "high"));
    body.add("background", normalizeText(aiPhotoProperties.getBackground(), "opaque"));
    body.add("output_format", normalizeOutputFormat(aiPhotoProperties.getOutputFormat()));

    String inputFidelity = normalizeText(aiPhotoProperties.getInputFidelity(), "");
    if (includeInputFidelity && !inputFidelity.isBlank()) {
      body.add("input_fidelity", inputFidelity);
    }

    body.add("image[]", createImagePart(imageBytes, image.getOriginalFilename(), image.getContentType()));
    return body;
  }

  private HttpEntity<ByteArrayResource> createImagePart(byte[] imageBytes, String filename, String contentType) {
    ByteArrayResource resource = new ByteArrayResource(imageBytes) {
      @Override
      public String getFilename() {
        return normalizeFilename(filename);
      }
    };

    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.parseMediaType(normalizeText(contentType, MediaType.IMAGE_PNG_VALUE)));
    headers.setContentDispositionFormData("image[]", resource.getFilename());
    return new HttpEntity<>(resource, headers);
  }

  private String buildPrompt(Preset style, Preset background, Preset intensity, String customPrompt) {
    StringBuilder prompt = new StringBuilder();
    prompt.append("Transform the uploaded photo into a polished Joseon-era portrait or scene reinterpretation.\n");
    prompt.append("Subject preservation:\n");
    prompt.append("- Keep the same person recognizable, including face shape, eyes, nose, mouth, hairstyle silhouette, expression, gaze direction, and body proportions.\n");
    prompt.append("- Preserve the original pose, camera angle, framing, and overall composition unless a slight crop is needed to keep the subject centered.\n");
    prompt.append("- If multiple people are visible, transform them consistently.\n");
    prompt.append("- Keep hands natural and anatomically correct.\n");
    prompt.append("Transformation goals:\n");
    prompt.append("- ").append(style.prompt()).append('\n');
    prompt.append("- ").append(background.prompt()).append('\n');
    prompt.append("- ").append(intensity.prompt()).append('\n');
    prompt.append("- Replace modern clothing with historically inspired Korean hanbok appropriate to the chosen style.\n");
    prompt.append("- Remove obvious modern distractions such as signage, cars, office furniture, or contemporary branding when possible.\n");
    prompt.append("Quality requirements:\n");
    prompt.append("- Produce a complete, coherent image with crisp facial detail, clean edges, believable lighting, and refined fabric texture.\n");
    prompt.append("- Make the transformation clearly visible. Do not return a subtle filter pass that looks almost unchanged.\n");
    prompt.append("Constraints:\n");
    prompt.append("- No text, logos, watermark, frame overlay, duplicated limbs, extra fingers, broken anatomy, distorted eyes, blur, or collage artifacts.\n");
    prompt.append("- Do not imitate any living artist or specific commercial studio style.\n");

    String sanitizedPrompt = sanitizeCustomPrompt(customPrompt);
    if (!sanitizedPrompt.isBlank()) {
      prompt.append("Extra user request:\n");
      prompt.append("- ").append(sanitizedPrompt).append('\n');
    }

    return prompt.toString().trim();
  }

  private String sanitizeCustomPrompt(String customPrompt) {
    String sanitized = normalizeText(customPrompt, "").replaceAll("\\s+", " ").trim();
    if (sanitized.length() > 320) {
      sanitized = sanitized.substring(0, 320).trim();
    }
    return sanitized;
  }

  private Preset resolvePreset(Map<String, Preset> presets, String requestedId, String defaultId) {
    if (requestedId == null || requestedId.isBlank()) {
      return presets.get(defaultId);
    }
    String normalized = requestedId.trim().toLowerCase(Locale.ROOT);
    return presets.getOrDefault(normalized, presets.get(defaultId));
  }

  private String resolveOutputSize(byte[] imageBytes) {
    Dimension dimension = readDimension(imageBytes);
    if (dimension == null || dimension.width <= 0 || dimension.height <= 0) {
      return DEFAULT_PORTRAIT_SIZE;
    }

    double aspectRatio = (double) dimension.width / (double) dimension.height;
    if (aspectRatio > 3.0d || aspectRatio < (1.0d / 3.0d)) {
      return dimension.width >= dimension.height ? DEFAULT_LANDSCAPE_SIZE : DEFAULT_PORTRAIT_SIZE;
    }

    int longEdge = Math.max(1024, aiPhotoProperties.getPreferredLongEdge());
    int width;
    int height;

    if (dimension.width >= dimension.height) {
      width = longEdge;
      height = (int) Math.round(longEdge / aspectRatio);
    } else {
      height = longEdge;
      width = (int) Math.round(longEdge * aspectRatio);
    }

    width = clampToMultipleOf16(width);
    height = clampToMultipleOf16(height);

    if (width < 512 || height < 512) {
      return dimension.width >= dimension.height ? DEFAULT_LANDSCAPE_SIZE : DEFAULT_PORTRAIT_SIZE;
    }

    return width + "x" + height;
  }

  private Dimension readDimension(byte[] imageBytes) {
    try (ImageInputStream input = ImageIO.createImageInputStream(new ByteArrayInputStream(imageBytes))) {
      if (input == null) return null;
      Iterator<ImageReader> readers = ImageIO.getImageReaders(input);
      ImageReader reader = readers.hasNext() ? readers.next() : null;
      if (reader == null) return null;
      try {
        reader.setInput(input);
        return new Dimension(reader.getWidth(0), reader.getHeight(0));
      } finally {
        reader.dispose();
      }
    } catch (IOException exception) {
      return null;
    }
  }

  private int clampToMultipleOf16(int value) {
    int rounded = Math.max(512, (int) Math.round(value / 16.0d) * 16);
    return Math.min(rounded, 3840);
  }

  private String normalizeFilename(String filename) {
    String normalized = normalizeText(filename, "upload.png")
        .replace('\\', '-')
        .replace('/', '-')
        .trim();
    return normalized.isBlank() ? "upload.png" : normalized;
  }

  private String extractProviderMessage(String responseBody, String fallback) {
    String normalizedBody = normalizeText(responseBody, "");
    if (normalizedBody.contains("\"message\"")) {
      int keyIndex = normalizedBody.indexOf("\"message\"");
      int colonIndex = normalizedBody.indexOf(':', keyIndex);
      int firstQuoteIndex = normalizedBody.indexOf('"', colonIndex + 1);
      int secondQuoteIndex = normalizedBody.indexOf('"', firstQuoteIndex + 1);
      if (firstQuoteIndex >= 0 && secondQuoteIndex > firstQuoteIndex) {
        return normalizedBody.substring(firstQuoteIndex + 1, secondQuoteIndex);
      }
    }

    String fallbackMessage = normalizeText(fallback, "외부 이미지 변환 API 호출에 실패했습니다.");
    return normalizedBody.isBlank() ? fallbackMessage : normalizedBody;
  }

  private String resolveBaseUrl(ExternalApiProperties properties) {
    if (properties == null || properties.openai() == null) {
      return "https://api.openai.com/v1";
    }
    return normalizeText(properties.openai().baseUrl(), "https://api.openai.com/v1").replaceAll("/+$", "");
  }

  private String normalizeOutputFormat(String format) {
    String normalized = normalizeText(format, "png").toLowerCase(Locale.ROOT);
    return switch (normalized) {
      case "png", "webp", "jpeg" -> normalized;
      case "jpg" -> "jpeg";
      default -> "png";
    };
  }

  private String outputFormatToMimeType(String format) {
    return switch (format) {
      case "webp" -> "image/webp";
      case "jpeg" -> "image/jpeg";
      default -> "image/png";
    };
  }

  private String normalizeText(String value, String fallback) {
    if (value == null) return fallback;
    String normalized = value.trim();
    return normalized.isBlank() ? fallback : normalized;
  }

  private record Preset(String label, String prompt) {
  }

  private record OpenAiImageResponse(List<OpenAiImageData> data) {
  }

  private record OpenAiImageData(
      @JsonProperty("b64_json") String b64Json,
      @JsonProperty("revised_prompt") String revisedPrompt
  ) {
  }
}
