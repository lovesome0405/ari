package com.lovesome.maru.web;

import com.lovesome.maru.dto.CourseDto;
import com.lovesome.maru.dto.FestivalDto;
import com.lovesome.maru.dto.HeritageDto;
import com.lovesome.maru.dto.PlaceDto;
import com.lovesome.maru.dto.PublicDataSourceDto;
import com.lovesome.maru.service.CatalogService;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CatalogController {

  private final CatalogService catalogService;

  public CatalogController(CatalogService catalogService) {
    this.catalogService = catalogService;
  }

  @GetMapping("/courses")
  public List<CourseDto> getCourses() {
    return catalogService.getCourses();
  }

  @GetMapping("/courses/{id}")
  public ResponseEntity<CourseDto> getCourse(@PathVariable String id) {
    return catalogService.getCourse(id)
        .map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  @GetMapping("/places")
  public List<PlaceDto> getPlaces() {
    return catalogService.getPlaces();
  }

  @GetMapping("/festivals")
  public List<FestivalDto> getFestivals() {
    return catalogService.getFestivals();
  }

  @GetMapping("/heritage")
  public List<HeritageDto> getHeritage() {
    return catalogService.getHeritage();
  }

  @GetMapping("/public-data-sources")
  public List<PublicDataSourceDto> getPublicDataSources() {
    return catalogService.getPublicDataSources();
  }
}
