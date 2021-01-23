package com.price.tracker.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Implementa a interface AuthenticationEntryPoint e provê implementação para o método commence.
 * Este método é chamando sempre que uma exceção é lançada para um usuário não autenticado quando
 * este tenta acessar um recurso que requer autenticação .
 */
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint
{

  private static final Logger LOGGER = LoggerFactory.getLogger(JwtAuthenticationEntryPoint.class);

  @Override
  public void commence(HttpServletRequest httpServletRequest,
                       HttpServletResponse httpServletResponse,
                       AuthenticationException e) throws IOException, ServletException
  {
    LOGGER.error("Responding with unauthorized error. Message - {}", e.getMessage());
    httpServletResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED,
      "Sorry, You're not authorized to access this resource.");
  }
}
