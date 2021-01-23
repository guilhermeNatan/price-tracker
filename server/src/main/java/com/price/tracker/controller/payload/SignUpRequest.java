/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

package com.price.tracker.controller.payload;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * Representa a requisição enviada durante o cadastro de usuário .
 */
@Getter
@Setter
public class SignUpRequest
{
  @NotBlank
  @Size(min = 3, max = 50)
  private String nome;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  @NotBlank
  @Size(min = 6, max = 100)
  private String password;

}
