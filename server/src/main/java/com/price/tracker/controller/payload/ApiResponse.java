package com.price.tracker.controller.payload;

import lombok.Getter;
import lombok.Setter;

/**
 * Representa uma resposta ddo back end .
 */
@Getter
@Setter
public class ApiResponse
{
  private Boolean success;
  private String message;

  /**
   * @param success verdadeiro caso houve sucesso
   * @param message mensagem a ser enviada
   */
  public ApiResponse(Boolean success, String message)
  {
    this.success = success;
    this.message = message;
  }

}
