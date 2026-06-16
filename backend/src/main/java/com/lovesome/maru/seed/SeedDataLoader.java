package com.lovesome.maru.seed;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lovesome.maru.domain.Course;
import com.lovesome.maru.domain.CoursePlace;
import com.lovesome.maru.domain.Festival;
import com.lovesome.maru.domain.Heritage;
import com.lovesome.maru.domain.Place;
import com.lovesome.maru.domain.PublicDataSource;
import com.lovesome.maru.repository.CoursePlaceRepository;
import com.lovesome.maru.repository.CourseRepository;
import com.lovesome.maru.repository.FestivalRepository;
import com.lovesome.maru.repository.HeritageRepository;
import com.lovesome.maru.repository.PlaceRepository;
import com.lovesome.maru.repository.PublicDataSourceRepository;
import java.io.IOException;
import java.io.InputStream;
import java.text.Normalizer;
import java.util.List;
import java.util.Locale;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class SeedDataLoader implements ApplicationRunner {

  private static final Logger log = LoggerFactory.getLogger(SeedDataLoader.class);

  private final ObjectMapper objectMapper;
  private final CourseRepository courseRepository;
  private final PlaceRepository placeRepository;
  private final CoursePlaceRepository coursePlaceRepository;
  private final FestivalRepository festivalRepository;
  private final HeritageRepository heritageRepository;
  private final PublicDataSourceRepository publicDataSourceRepository;

  public SeedDataLoader(
      ObjectMapper objectMapper,
      CourseRepository courseRepository,
      PlaceRepository placeRepository,
      CoursePlaceRepository coursePlaceRepository,
      FestivalRepository festivalRepository,
      HeritageRepository heritageRepository,
      PublicDataSourceRepository publicDataSourceRepository
  ) {
    this.objectMapper = objectMapper;
    this.courseRepository = courseRepository;
    this.placeRepository = placeRepository;
    this.coursePlaceRepository = coursePlaceRepository;
    this.festivalRepository = festivalRepository;
    this.heritageRepository = heritageRepository;
    this.publicDataSourceRepository = publicDataSourceRepository;
  }

  @Override
  @Transactional
  public void run(ApplicationArguments args) throws Exception {
    seedCoursesAndPlaces();
    seedFestivals();
    seedHeritage();
    seedPublicDataSources();
  }

  private void seedCoursesAndPlaces() throws IOException {
    List<SeedCourseDto> courses = readSeed("seed/courses.json", new TypeReference<List<SeedCourseDto>>() {});
    int insertedCourses = 0;
    int insertedPlaces = 0;
    int insertedCoursePlaces = 0;

    for (int courseIndex = 0; courseIndex < courses.size(); courseIndex += 1) {
      SeedCourseDto seedCourse = courses.get(courseIndex);
      Course course = courseRepository.findById(seedCourse.id()).orElse(null);
      if (course == null) {
        course = courseRepository.save(toCourse(seedCourse, courseIndex + 1));
        insertedCourses += 1;
      }

      List<SeedPlaceDto> seedPlaces = seedCourse.places() == null ? List.of() : seedCourse.places();
      for (int placeIndex = 0; placeIndex < seedPlaces.size(); placeIndex += 1) {
        SeedPlaceDto seedPlace = seedPlaces.get(placeIndex);
        String placeId = safeId(seedPlace.id(), text(seedPlace.name(), "en"), text(seedPlace.name(), "ko"),
            seedCourse.id() + "-place-" + (placeIndex + 1));

        Place place = placeRepository.findById(placeId).orElse(null);
        if (place == null) {
          place = placeRepository.save(toPlace(seedPlace, placeId));
          insertedPlaces += 1;
        }

        int sortOrder = placeIndex + 1;
        boolean samePlaceLinked = coursePlaceRepository.existsByCourse_IdAndPlace_Id(course.getId(), place.getId());
        boolean sortOrderUsed = coursePlaceRepository.existsByCourse_IdAndSortOrder(course.getId(), sortOrder);
        if (!samePlaceLinked && !sortOrderUsed) {
          coursePlaceRepository.save(CoursePlace.create(course, place, sortOrder));
          insertedCoursePlaces += 1;
        }
      }
    }

    log.info(
        "MARU seed courses loaded: {} courses inserted, {} places inserted, {} course-place links inserted",
        insertedCourses,
        insertedPlaces,
        insertedCoursePlaces
    );
  }

  private void seedFestivals() throws IOException {
    List<SeedFestivalDto> festivals = readSeed("seed/festivals.json", new TypeReference<List<SeedFestivalDto>>() {});
    int inserted = 0;
    for (SeedFestivalDto seedFestival : festivals) {
      if (!festivalRepository.existsById(seedFestival.id())) {
        festivalRepository.save(toFestival(seedFestival));
        inserted += 1;
      }
    }
    log.info("MARU seed festivals loaded: {} inserted", inserted);
  }

  private void seedHeritage() throws IOException {
    List<SeedHeritageDto> heritageItems = readSeed("seed/heritage.json", new TypeReference<List<SeedHeritageDto>>() {});
    int inserted = 0;
    for (SeedHeritageDto seedHeritage : heritageItems) {
      if (!heritageRepository.existsById(seedHeritage.id())) {
        heritageRepository.save(toHeritage(seedHeritage));
        inserted += 1;
      }
    }
    log.info("MARU seed heritage loaded: {} inserted", inserted);
  }

  private void seedPublicDataSources() throws IOException {
    List<SeedPublicDataSourceDto> sources =
        readSeed("seed/public-data-sources.json", new TypeReference<List<SeedPublicDataSourceDto>>() {});
    int inserted = 0;
    for (SeedPublicDataSourceDto source : sources) {
      if (!publicDataSourceRepository.existsById(source.id())) {
        publicDataSourceRepository.save(toPublicDataSource(source));
        inserted += 1;
      }
    }
    log.info("MARU seed public data sources loaded: {} inserted", inserted);
  }

  private Course toCourse(SeedCourseDto seedCourse, int displayOrder) {
    return Course.create(
        limit(seedCourse.id(), 120),
        displayOrder,
        text(seedCourse.title(), "ko"),
        text(seedCourse.title(), "en"),
        limit(seedCourse.theme(), 120),
        toJson(seedCourse.target(), "[]"),
        limit(seedCourse.duration(), 80),
        limit(seedCourse.budget(), 80),
        limit(seedCourse.indoorOutdoor(), 80),
        toJson(seedCourse.recommendedTime(), "[]"),
        seedCourse.score(),
        limit(text(seedCourse.walking(), "ko"), 120),
        limit(text(seedCourse.walking(), "en"), 120),
        limit(text(seedCourse.fee(), "ko"), 120),
        limit(text(seedCourse.fee(), "en"), 120),
        text(seedCourse.aiSummary(), "ko"),
        text(seedCourse.aiSummary(), "en"),
        text(seedCourse.reason(), "ko"),
        text(seedCourse.reason(), "en"),
        text(seedCourse.tip(), "ko"),
        text(seedCourse.tip(), "en"),
        toJson(seedCourse.keywords(), "[]"),
        limit(seedCourse.image(), 500),
        seedCourse.imagePrompt(),
        limit(seedCourse.publicDataSource(), 500),
        limit(seedCourse.source(), 500),
        toJson(seedCourse.mapLinks(), "{}")
    );
  }

  private Place toPlace(SeedPlaceDto seedPlace, String placeId) {
    return Place.create(
        limit(placeId, 120),
        text(seedPlace.name(), "ko"),
        text(seedPlace.name(), "en"),
        limit(seedPlace.category(), 120),
        limit(seedPlace.address(), 500),
        seedPlace.lat(),
        seedPlace.lng(),
        text(seedPlace.description(), "ko"),
        text(seedPlace.description(), "en"),
        limit(seedPlace.publicDataSource(), 500)
    );
  }

  private Festival toFestival(SeedFestivalDto seedFestival) {
    return Festival.create(
        limit(seedFestival.id(), 120),
        text(seedFestival.title(), "ko"),
        text(seedFestival.title(), "en"),
        limit(seedFestival.category(), 120),
        limit(seedFestival.district(), 120),
        limit(text(seedFestival.venue(), "ko"), 255),
        limit(text(seedFestival.venue(), "en"), 255),
        limit(seedFestival.dateType(), 120),
        toJson(seedFestival.recommendedFor(), "[]"),
        toJson(seedFestival.relatedCourseIds(), "[]"),
        toJson(seedFestival.relatedPlaceIds(), "[]"),
        limit(seedFestival.publicDataSource(), 500),
        seedFestival.aiUse()
    );
  }

  private Heritage toHeritage(SeedHeritageDto seedHeritage) {
    return Heritage.create(
        limit(seedHeritage.id(), 120),
        text(seedHeritage.name(), "ko"),
        text(seedHeritage.name(), "en"),
        limit(seedHeritage.heritageType(), 120),
        limit(seedHeritage.district(), 120),
        limit(seedHeritage.address(), 500),
        seedHeritage.lat(),
        seedHeritage.lng(),
        toJson(seedHeritage.interpretationKeywords(), "[]"),
        limit(seedHeritage.publicDataSource(), 500),
        seedHeritage.aiInterpretationRole()
    );
  }

  private PublicDataSource toPublicDataSource(SeedPublicDataSourceDto source) {
    return PublicDataSource.create(
        limit(source.id(), 120),
        limit(source.name(), 255),
        limit(source.provider(), 255),
        toJson(source.useFor(), "[]"),
        source.useDescription(),
        source.connectedFeature(),
        source.currentStatus(),
        source.futureIntegration()
    );
  }

  private <T> List<T> readSeed(String path, TypeReference<List<T>> typeReference) throws IOException {
    ClassPathResource resource = new ClassPathResource(path);
    try (InputStream inputStream = resource.getInputStream()) {
      return objectMapper.readValue(inputStream, typeReference);
    }
  }

  private String text(SeedLocalizedTextDto text, String language) {
    if (text == null) return "";
    return "en".equals(language) ? clean(text.en()) : clean(text.ko());
  }

  private String toJson(Object value, String fallbackJson) {
    if (value == null) return fallbackJson;
    try {
      return objectMapper.writeValueAsString(value);
    } catch (Exception ignored) {
      return fallbackJson;
    }
  }

  private String safeId(String explicitId, String englishName, String koreanName, String fallback) {
    String source = firstNonBlank(explicitId, englishName, koreanName, fallback);
    String normalized = Normalizer.normalize(source, Normalizer.Form.NFD)
        .replaceAll("\\p{M}", "")
        .toLowerCase(Locale.ROOT)
        .replaceAll("[^a-z0-9]+", "-")
        .replaceAll("^-|-$", "");
    if (normalized.isBlank()) normalized = fallback;
    return limit(normalized, 120);
  }

  private String firstNonBlank(String... values) {
    for (String value : values) {
      if (value != null && !value.isBlank()) return value;
    }
    return "seed-item";
  }

  private String clean(String value) {
    return value == null ? "" : value.trim();
  }

  private String limit(String value, int maxLength) {
    String cleaned = clean(value);
    if (cleaned.length() <= maxLength) return cleaned;
    return cleaned.substring(0, maxLength);
  }
}
