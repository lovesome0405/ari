package com.lovesome.maru.repository;

import com.lovesome.maru.domain.Course;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CourseRepository extends JpaRepository<Course, String> {

  @EntityGraph(attributePaths = {"coursePlaces", "coursePlaces.place"})
  @Query("select distinct c from Course c order by c.displayOrder asc")
  List<Course> findAllWithPlacesOrderByDisplayOrder();

  @EntityGraph(attributePaths = {"coursePlaces", "coursePlaces.place"})
  @Query("select distinct c from Course c where c.id = :id")
  Optional<Course> findByIdWithPlaces(@Param("id") String id);
}
