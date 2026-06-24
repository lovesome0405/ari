package com.lovesome.maru.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "maru.ai-photo")
public class AiPhotoProperties {

  private boolean enabled = true;
  private String model = "gpt-image-2";
  private String quality = "high";
  private String outputFormat = "png";
  private String background = "opaque";
  private String inputFidelity = "high";
  private int preferredLongEdge = 1536;
  private int maxUploadBytes = 15_000_000;

  public boolean isEnabled() {
    return enabled;
  }

  public void setEnabled(boolean enabled) {
    this.enabled = enabled;
  }

  public String getModel() {
    return model;
  }

  public void setModel(String model) {
    this.model = model;
  }

  public String getQuality() {
    return quality;
  }

  public void setQuality(String quality) {
    this.quality = quality;
  }

  public String getOutputFormat() {
    return outputFormat;
  }

  public void setOutputFormat(String outputFormat) {
    this.outputFormat = outputFormat;
  }

  public String getBackground() {
    return background;
  }

  public void setBackground(String background) {
    this.background = background;
  }

  public String getInputFidelity() {
    return inputFidelity;
  }

  public void setInputFidelity(String inputFidelity) {
    this.inputFidelity = inputFidelity;
  }

  public int getPreferredLongEdge() {
    return preferredLongEdge;
  }

  public void setPreferredLongEdge(int preferredLongEdge) {
    this.preferredLongEdge = preferredLongEdge;
  }

  public int getMaxUploadBytes() {
    return maxUploadBytes;
  }

  public void setMaxUploadBytes(int maxUploadBytes) {
    this.maxUploadBytes = maxUploadBytes;
  }
}
