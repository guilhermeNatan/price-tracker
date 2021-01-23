package com.price.tracker.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * Exceção lançada pela api.
 */
@Getter
@AllArgsConstructor
public class RestException extends RuntimeException
{
  /**
   * Código da mensagem que queremos lançar
   */
  private String mensagem;

  /**
   * Argumentos que serão aplicados na mensagem.
   */
  private Object[] argumentos;
}
