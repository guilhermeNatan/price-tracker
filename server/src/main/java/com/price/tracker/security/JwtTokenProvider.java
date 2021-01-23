package com.price.tracker.security;

import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * Classe utilitário para le o JWT secret e tempo de expiração apartir das  propriedades .
 */
@Component
public class JwtTokenProvider
{

  /**
   * Pós-fixo de usuário administrador .
   */
  public static final String ADMIN = "&admin";

  private static final Logger LOGGER = LoggerFactory.getLogger(JwtTokenProvider.class);

  @Value("${app.jwtSecret}")
  private String jwtSecret;

  @Value("${app.jwtExpirationInMs}")
  private int jwtExpirationInMs;

  /**
   * Criar um token no padrão jwt .
   * @param authentication {@Authentication} .
   * @return Representação do token JWT .
   */
  public String generateToken(Authentication authentication)
  {

    UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

    Date now = new Date();
    Date expiryDate = new Date(now.getTime() + jwtExpirationInMs);

    String username = userPrincipal.getUsername();
    String subject = username !=null ?
      Long.toString(userPrincipal.getId()) + ADMIN :
      Long.toString(userPrincipal.getId());

    return Jwts.builder()
      .setSubject(subject)
      .setIssuedAt(new Date())
      .setExpiration(expiryDate)
      .signWith(SignatureAlgorithm.HS512, jwtSecret)
      .compact();
  }

  /**
   * @param token toke jwt .
   * @return  o id de um usuorio a partir do token .
   */
  public String getUserIdFromJWT(String token)
  {
    Claims claims = Jwts.parser()
      .setSigningKey(jwtSecret)
      .parseClaimsJws(token)
      .getBody();

    return claims.getSubject();
  }

  /**
   * Valida um token de autenticação .
   * @param authToken token
   * @return verdadeiro se o token é valido, false caso contrário .
   */
  public boolean validateToken(String authToken)
  {
    try {
      Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
      return true;
    } catch (SignatureException ex) {
      LOGGER.error("Invalid JWT signature");
    } catch (MalformedJwtException ex) {
      LOGGER.error("Invalid JWT token");
    } catch (ExpiredJwtException ex) {
      LOGGER.error("Expired JWT token");
    } catch (UnsupportedJwtException ex) {
      LOGGER.error("Unsupported JWT token");
    } catch (IllegalArgumentException ex) {
      LOGGER.error("JWT claims string is empty.");
    }
    return false;
  }
}
