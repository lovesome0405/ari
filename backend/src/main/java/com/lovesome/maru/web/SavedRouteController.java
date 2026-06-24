package com.lovesome.maru.web;

import com.lovesome.maru.domain.SavedRoute;
import com.lovesome.maru.dto.SavedRouteRequest;
import com.lovesome.maru.dto.SavedRouteResponse;
import com.lovesome.maru.repository.SavedRouteRepository;
import jakarta.validation.Valid;
import java.net.URI;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/saved-routes")
public class SavedRouteController {

  private final SavedRouteRepository savedRouteRepository;

  public SavedRouteController(SavedRouteRepository savedRouteRepository) {
    this.savedRouteRepository = savedRouteRepository;
  }

  @PostMapping
  public ResponseEntity<SavedRouteResponse> createSavedRoute(
      @Valid @RequestBody SavedRouteRequest request
  ) {
    SavedRoute savedRoute = savedRouteRepository.save(SavedRoute.create(
        normalize(request.routeId()),
        normalize(request.routeTitle()),
        normalizeNullable(request.language()),
        normalizeNullable(request.theme()),
        normalizeNullable(request.memo())
    ));

    return ResponseEntity
        .created(URI.create("/api/saved-routes/" + savedRoute.getId()))
        .body(toResponse(savedRoute));
  }

  @GetMapping
  public List<SavedRouteResponse> getSavedRoutes() {
    return savedRouteRepository.findAllByOrderByIdDesc().stream()
        .map(this::toResponse)
        .toList();
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteSavedRoute(@PathVariable Long id) {
    if (!savedRouteRepository.existsById(id)) {
      return ResponseEntity.notFound().build();
    }

    savedRouteRepository.deleteById(id);
    return ResponseEntity.noContent().build();
  }

  private SavedRouteResponse toResponse(SavedRoute savedRoute) {
    return new SavedRouteResponse(
        savedRoute.getId(),
        savedRoute.getRouteId(),
        savedRoute.getRouteTitle(),
        savedRoute.getLanguage(),
        savedRoute.getTheme(),
        savedRoute.getMemo(),
        savedRoute.getCreatedAt()
    );
  }

  private String normalize(String value) {
    return value.trim();
  }

  private String normalizeNullable(String value) {
    if (value == null) return null;
    String normalized = value.trim();
    return normalized.isBlank() ? null : normalized;
  }
}
