package com.price.tracker.repository;

import com.price.tracker.entity.AdminUser;
import org.springframework.stereotype.Repository;


import java.util.Optional;

/**
 * Repository para {@link AdminUser}.
 */
@Repository
public interface AdminUserRepository  extends UserRepository<AdminUser>
{

  /**
   * Obter usuário a partir do username .
   * @param username username
   * @return Usuario
   */
  Optional<AdminUser> findByUsername(String username);


  /**
   * @param username  username .
   * @return Verdadeiro se já existe um usuário com determinado username .
   */
  Boolean existsByUsername(String username);


  /**
   *Encontra usuário por nome ou email .
   * @param username nome de usuário .
   * @param email   e-mail .
   * @return {@link User} .
   */
  Optional<AdminUser> findByUsernameOrEmail(String username, String email);

}
