package com.price.tracker.repository;

import com.price.tracker.entity.User;
import org.springframework.data.repository.cdi.Eager;

/**
 * <p> Finalidade da Classe: Repository de cliente.</p>
 *
 * <p> Copyright: Copyright (c) Synergia - DCC - UFMG </p>
 */
@Eager
public interface ClienteRepository extends UserRepository<User>
{
}
