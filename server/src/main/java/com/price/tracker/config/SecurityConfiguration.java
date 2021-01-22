package com.price.tracker.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

/**
 * Classe central de configurção do spring security .
 *
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
  securedEnabled = true,
  jsr250Enabled = true,
  prePostEnabled = true
)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter
{
  private static final String BARRA = "/";
  @Value("${url-base}")
  private String urlBase;

  /**
   * Codificador de password  .
   * @return BCryptPasswordEncoder .
   */
  @Bean
  public PasswordEncoder passwordEncoder()
  {
    return new BCryptPasswordEncoder();
  }



  @Override
  protected void configure(HttpSecurity http) throws Exception
  {
    http
      .cors()
      .and()
      .csrf()
      .disable()
      .exceptionHandling()
      .and()
      .sessionManagement()
      .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
      .and()
      .authorizeRequests()
      .antMatchers(BARRA,"/static/**", "/favicon.ico", "/service-worker.js",
        "/scrab/**",  BARRA +urlBase+"/*/public/**")
      .permitAll()

      .antMatchers(BARRA +urlBase+"/arquivo")
      .permitAll()
      .antMatchers( "/api/auth/**")
      .permitAll()
      .anyRequest()
      .authenticated();


  }

  @Bean
  CorsConfigurationSource corsConfigurationSource()
  {
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration corsConfig = new CorsConfiguration().applyPermitDefaultValues();
    corsConfig.addAllowedMethod(HttpMethod.PUT);
    corsConfig.addAllowedMethod(HttpMethod.DELETE);
    source.registerCorsConfiguration("/**", corsConfig);
    return source;
  }

}
