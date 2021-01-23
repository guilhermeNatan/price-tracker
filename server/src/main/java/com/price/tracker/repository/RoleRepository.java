package com.price.tracker.repository;

import com.price.tracker.entity.Role;
import com.price.tracker.entity.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Repositorio para {@link Role} .
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long>
{

  /**
   * @param roleName {@link RoleName}
   * @return Role de acesso .
   */
  Optional<Role> findByName(RoleName roleName);
}
