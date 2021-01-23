package com.price.tracker.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.price.tracker.entity.AdminUser;
import com.price.tracker.entity.User;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 *As instancias dessa classe serão retornadas a partir do  UserDetailsService.
 * O Spring Security irá usar as informações armazenadas no  UserPrincipal.
 */
public class UserPrincipal implements UserDetails
{
  @Getter
  private Long id;

  @Getter
  private String name;

  private String username;

  @Getter
  @JsonIgnore
  private String email;

  @JsonIgnore
  private String password;

  private Collection<? extends GrantedAuthority> authorities;

  /**
   *Construtor .
   * @param id id usuário
   * @param name  nome completo
   * @param email email
   * @param password senha
   * @param authorities permissões de acesso .
   */
  public UserPrincipal(Long id, String name,  String email,
                       String password, Collection<? extends GrantedAuthority> authorities)
  {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.authorities = authorities;
  }


  /**
   * Cria um UserPrincipal a partir de um {@link User} .
   * @param user {@link User}
   * @return {@link UserPrincipal}
   */
  public static UserPrincipal create(User user)
  {
    List<GrantedAuthority> authorities = user.getRoles().stream().map(role ->
      new SimpleGrantedAuthority(role.getName().name())
    ).collect(Collectors.toList());

    return new UserPrincipal(
      user.getId(),
      user.getNome(),
      user.getEmail(),
      user.getPassword(),
      authorities
    );
  }


  /**
   * @param adminUser {@link AdminUser}
   * @return UserPrincipal para usuário com perfil de administrador.
   */
  public static UserPrincipal createAdminUser(AdminUser adminUser)
  {
    UserPrincipal userPrincipal = create(adminUser);
    userPrincipal.setUsername(adminUser.getUsername());
    return  userPrincipal;
  }


  @Override
  public Collection<? extends GrantedAuthority> getAuthorities()
  {
    return authorities;
  }

  @Override
  public String getPassword()
  {
    return password;
  }

  @Override
  public String getUsername()
  {
    return username;
  }

  private void setUsername(String username)
  {
    this.username = username;
  }

  @Override
  public boolean isAccountNonExpired()
  {
    return true;
  }

  @Override
  public boolean isAccountNonLocked()
  {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired()
  {
    return true;
  }

  @Override
  public boolean isEnabled()
  {
    return true;
  }


  @Override
  public boolean equals(Object o)
  {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UserPrincipal that = (UserPrincipal) o;
    return Objects.equals(id, that.id);
  }

  @Override
  public int hashCode()
  {
    return Objects.hash(id);
  }
}
