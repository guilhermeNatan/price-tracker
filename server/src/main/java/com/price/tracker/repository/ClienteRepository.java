package com.price.tracker.repository;

import com.price.tracker.entity.Cliente;
import org.springframework.data.repository.cdi.Eager;

/**
 * <p> Finalidade da Classe: Repository de cliente.</p>
 *
 * <p> Copyright: Copyright (c) Synergia - DCC - UFMG </p>
 */
@Eager
public interface ClienteRepository extends UserRepository<Cliente>
{
}
