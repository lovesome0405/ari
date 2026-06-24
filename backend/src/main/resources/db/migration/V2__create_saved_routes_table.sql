CREATE TABLE saved_routes (
  id BIGINT NOT NULL AUTO_INCREMENT,
  route_id VARCHAR(120) NOT NULL,
  route_title VARCHAR(255) NOT NULL,
  language VARCHAR(20),
  theme VARCHAR(120),
  memo TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_saved_routes_created_at (created_at),
  INDEX idx_saved_routes_route_id (route_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
