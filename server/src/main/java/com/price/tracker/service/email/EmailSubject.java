package com.price.tracker.service.email;

import lombok.Getter;

/**
 * Assuntos de e-mail.
 */
public enum EmailSubject
{
  RECUPERAR_SENHA("Recuperar senha Editora UFMG"),
  CONFIRMACAO_EMAIL("Confirmação de e-mail") ;

  @Getter
  private String descricao;

  EmailSubject(String descricao)
  {
    this.descricao = descricao;
  }

}
