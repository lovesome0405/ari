package com.lovesome.maru.repository;

import com.lovesome.maru.domain.Place;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceRepository extends JpaRepository<Place, String> {
}
