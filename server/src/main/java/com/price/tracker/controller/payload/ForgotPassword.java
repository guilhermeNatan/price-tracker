package com.price.tracker.controller.payload;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * Paylod para esqueci minha senha .
 */
@Getter
@Setter
public class ForgotPassword
{
  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  private Boolean isCliente;
}
