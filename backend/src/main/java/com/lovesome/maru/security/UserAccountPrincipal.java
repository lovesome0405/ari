package com.lovesome.maru.security;

import com.lovesome.maru.domain.UserAccount;
import java.util.Collection;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserAccountPrincipal implements UserDetails {

  private final String userId;
  private final String email;
  private final String displayName;
  private final String role;

  private UserAccountPrincipal(String userId, String email, String displayName, String role) {
    this.userId = userId;
    this.email = email;
    this.displayName = displayName;
    this.role = role;
  }

  public static UserAccountPrincipal from(UserAccount user) {
    return new UserAccountPrincipal(
        user.getId(),
        user.getEmail(),
        user.getDisplayName(),
        user.getRole().name()
    );
  }

  public String getUserId() {
    return userId;
  }

  public String getDisplayName() {
    return displayName;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return List.of(new SimpleGrantedAuthority("ROLE_" + role));
  }

  @Override
  public String getPassword() {
    return "";
  }

  @Override
  public String getUsername() {
    return email;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }
}
