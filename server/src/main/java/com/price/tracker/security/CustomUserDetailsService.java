package com.price.tracker.security;

import com.price.tracker.entity.AdminUser;
import com.price.tracker.entity.Cliente;
import com.price.tracker.entity.User;
import com.price.tracker.repository.AdminUserRepository;
import com.price.tracker.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * Serviço que provê metodos para carregar um usuário na sessão pelo spring security .
 *
 */
@Service
public class CustomUserDetailsService implements UserDetailsService
{

  @Autowired
  private ClienteRepository clienteRepository;

  @Autowired
  private AdminUserRepository adminUserUserRepository;

  /**
   * Método usado pelo spring security para carregar o usuário pelo nome ou e-mail  .
   * @param userNameOrEmail
   * @return
   * @throws UsernameNotFoundException
   */
  @Override
  @Transactional
  public UserDetails loadUserByUsername(String userNameOrEmail)
    throws UsernameNotFoundException
  {
    Cliente cliente = clienteRepository.findByEmail(userNameOrEmail).orElse(null);
    if (cliente != null) {
      return UserPrincipal.create(cliente);
    }

    AdminUser adminUser = adminUserUserRepository.findByUsername(userNameOrEmail).orElse(null);
    if (adminUser != null) {
      return UserPrincipal.createAdminUser(adminUser);
    }
    throw new UsernameNotFoundException(
      "Não foi encontrado nenhum cliente ou administrador com o email ou username : "
        + userNameOrEmail);
  }

  /**
   * Método usado pelo JWTAuthenticationFilter .
   *
   * @param idWithUserName id do usuário .
   * @return {@link UserDetails} Objeto usado pelo spring security .
   */
  @Transactional
  public UserDetails loadUserById(String idWithUserName)
  {
    Long id;
    if (!idWithUserName.contains(JwtTokenProvider.ADMIN)) {
      id = Long.parseLong(idWithUserName);
      User user = clienteRepository.findById(id).orElseThrow(() ->
        new UsernameNotFoundException("Não foi encontrado nenhum cliente com o id : " +
          idWithUserName)
      );

      return UserPrincipal.create(user);
    }

    id = Long.parseLong(idWithUserName.replace(JwtTokenProvider.ADMIN, ""));
    AdminUser adminUser = adminUserUserRepository.findById(id).orElseThrow(() ->
      new UsernameNotFoundException("Não foi encontrado nenhum administrador com o id : " +
        idWithUserName)
    );

    if (Boolean.TRUE.equals(adminUser.getAtivo())) {
      return UserPrincipal.createAdminUser(adminUser);
    }
    // se o usuário não esta ativo ele não deve autenticar no sistema .
    return null;
  }
}
