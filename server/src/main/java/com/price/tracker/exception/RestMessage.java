package com.price.tracker.exception;

import lombok.Getter;

import java.util.List;

/**
 * Payload para mensagens de exceção .
 */
@Getter
public class RestMessage
{
  private String mensagem;
  private List<String> mensagens;

  /**
   * Construtor para mensagens de exceções.
   *
   * @param mensagens Lista de mensagens a serem enviadas na requisição .
   */
  public RestMessage(List<String> mensagens)
  {
    this.mensagens = mensagens;
  }

  /**
   * Construtor para mensagens de exceções.
   *
   * @param mensagem Mensagem a ser enviada na requisição .
   */
  public RestMessage(String mensagem)
  {
    this.mensagem = mensagem;
  }
}
