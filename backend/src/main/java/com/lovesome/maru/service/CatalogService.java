package com.lovesome.maru.service;

import com.lovesome.maru.dto.CourseDto;
import com.lovesome.maru.dto.FestivalDto;
import com.lovesome.maru.dto.HeritageDto;
import com.lovesome.maru.dto.PlaceDto;
import com.lovesome.maru.dto.PublicDataSourceDto;
import com.lovesome.maru.repository.CourseRepository;
import com.lovesome.maru.repository.FestivalRepository;
import com.lovesome.maru.repository.HeritageRepository;
import com.lovesome.maru.repository.PlaceRepository;
import com.lovesome.maru.repository.PublicDataSourceRepository;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class CatalogService {

  private final CourseRepository courseRepository;
  private final PlaceRepository placeRepository;
  private final FestivalRepository festivalRepository;
  private final HeritageRepository heritageRepository;
  private final PublicDataSourceRepository publicDataSourceRepository;
  private final CatalogMapper mapper;

  public CatalogService(
      CourseRepository courseRepository,
      PlaceRepository placeRepository,
      FestivalRepository festivalRepository,
      HeritageRepository heritageRepository,
      PublicDataSourceRepository publicDataSourceRepository,
      CatalogMapper mapper
  ) {
    this.courseRepository = courseRepository;
    this.placeRepository = placeRepository;
    this.festivalRepository = festivalRepository;
    this.heritageRepository = heritageRepository;
    this.publicDataSourceRepository = publicDataSourceRepository;
    this.mapper = mapper;
  }

  public List<CourseDto> getCourses() {
    return courseRepository.findAllByOrderByDisplayOrderAsc().stream()
        .map(mapper::toCourseDto)
        .toList();
  }

  public Optional<CourseDto> getCourse(String id) {
    return courseRepository.findByIdWithPlaces(id).map(mapper::toCourseDto);
  }

  public List<PlaceDto> getPlaces() {
    return placeRepository.findAll().stream()
        .sorted(Comparator.comparing(place -> place.getNameKo() == null ? "" : place.getNameKo()))
        .map(mapper::toPlaceDto)
        .toList();
  }

  public List<FestivalDto> getFestivals() {
    return festivalRepository.findAll().stream()
        .map(mapper::toFestivalDto)
        .toList();
  }

  public List<HeritageDto> getHeritage() {
    return heritageRepository.findAll().stream()
        .map(mapper::toHeritageDto)
        .toList();
  }

  public List<PublicDataSourceDto> getPublicDataSources() {
    return publicDataSourceRepository.findAll().stream()
        .map(mapper::toPublicDataSourceDto)
        .toList();
  }
}
