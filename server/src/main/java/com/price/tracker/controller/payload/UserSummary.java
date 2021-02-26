package com.price.tracker.controller.payload;

import com.price.tracker.entity.RoleName;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Informações de usuário enviadas para o front-end .
 */
@Getter
@Setter
public class UserSummary
{
  private Long id;
  private String username;
  private String name;
  private String email;
  private List<RoleName> roles;
  /**
   * @param id id
   * @param username username
   * @param name nome
   * @param email email
   * @param roles lista de regras de acesso do usuário .
   */
  public UserSummary(Long id, String username, String name, String email,
                     Collection<? extends GrantedAuthority> roles)
  {
    this.id = id;
    this.username = username;
    this.name = name;
    this.email = email;
    this.roles = mapGrantedAuthorityForRoleName(roles);
  }

  /**
   * @param grantedAuthority permissões de acesso do usuário
   * @return List<RoleName>
   */
  public List<RoleName> mapGrantedAuthorityForRoleName(
    Collection<? extends GrantedAuthority> grantedAuthority)
  {
    return grantedAuthority.stream().map(o -> RoleName.valueOf(o.getAuthority()))
      .collect(Collectors.toList());
  }
}
