package com.price.tracker.controller.payload;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

/**
 * Representa a requisição enviada durante o login .
 */
@Getter
@Setter
public class LoginRequest
{

  @NotBlank
  private String usernameOrEmail;

  @NotBlank
  private String password;
}
