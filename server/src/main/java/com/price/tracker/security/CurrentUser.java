package com.price.tracker.security;

import org.springframework.security.core.annotation.AuthenticationPrincipal;

import java.lang.annotation.*;

/**
 * Esta anotation é apenas um  wrapper para a anotation AuthenticationPrincipal
 * assim diminuimos o acomplamento com spring security .
 *
 * Deve sempre ser usada quando for necessário acessar informações do usuário em um RestController
 * como parâmetro de um serviço .
 */
@Target({ElementType.PARAMETER, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@AuthenticationPrincipal
public @interface CurrentUser
{
}
