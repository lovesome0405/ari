package com.lovesome.maru.repository;

import com.lovesome.maru.domain.CoursePlace;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoursePlaceRepository extends JpaRepository<CoursePlace, Long> {

  boolean existsByCourse_IdAndPlace_Id(String courseId, String placeId);

  boolean existsByCourse_IdAndSortOrder(String courseId, Integer sortOrder);
}
