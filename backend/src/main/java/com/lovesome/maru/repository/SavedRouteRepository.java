package com.lovesome.maru.repository;

import com.lovesome.maru.domain.SavedRoute;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavedRouteRepository extends JpaRepository<SavedRoute, Long> {

  List<SavedRoute> findAllByOrderByIdDesc();
}
