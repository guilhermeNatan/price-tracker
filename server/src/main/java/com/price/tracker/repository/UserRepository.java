package com.price.tracker.repository;

import com.price.tracker.entity.User;
import org.springframework.data.repository.NoRepositoryBean;


import java.util.Optional;

@NoRepositoryBean
public interface UserRepository<T extends User> extends BaseRepo<T>
{

  /**
   * @param email  e-mail .
   * @return  {@link User} .
   */
  Optional<T> findByEmail(String email);


  /**
   * @param email email .
   * @return Verdadeiro se já existe um usuário com determinado email .
   */
  Boolean existsByEmail(String email);

  /**
   * @param resetToken token com permissão de resetar a senha .
   * @return usuário .
   */
  Optional<T> findByResetToken(String resetToken);
}
