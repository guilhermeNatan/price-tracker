package com.price.tracker.controller.payload;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * Payload para criacao de uma nova senha.
 */
@Getter
@Setter
public class ResetPassword
{
  @NotBlank
  @Size(min = 6, max = 100)
  private String newPassword;

  @NotBlank
  @Size(min = 6, max = 100)
  private String confirmNewPassword;

  @NotBlank
  private String token;


  @NotNull
  private Boolean isCliente;

}
