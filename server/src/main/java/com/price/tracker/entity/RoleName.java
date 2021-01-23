package com.price.tracker.entity;

import lombok.Getter;

/**
 * Esta enum representa as regras de acesso dos usuários .
 */
public enum RoleName
{

  ROLE_ADMINISTRADOR("Administrador"),
  ROLE_OPERADOR("Operador"),
  ROLE_GERENTE("Gerente"),
  ROLE_AUTOR("Autor"),

  ROLE_CLIENTE("Cliente");

  @Getter
  private String descricao;

  RoleName(String descricao)
  {
    this.descricao = descricao;
  }
}
