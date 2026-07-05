package com.lovesome.maru.repository;

import com.lovesome.maru.domain.UserAccount;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAccountRepository extends JpaRepository<UserAccount, String> {

  Optional<UserAccount> findByEmail(String email);

  Optional<UserAccount> findByGoogleSubject(String googleSubject);
}
