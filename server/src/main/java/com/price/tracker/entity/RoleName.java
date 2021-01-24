package com.price.tracker.entity;

import lombok.Getter;

/**
 * Esta enum representa as regras de acesso dos usuários .
 */
public enum RoleName
{

  ROLE_ADMIN("Administrador"),
  ROLE_USER("Usuário");

  @Getter
  private String descricao;

  RoleName(String descricao)
  {
    this.descricao = descricao;
  }
}
