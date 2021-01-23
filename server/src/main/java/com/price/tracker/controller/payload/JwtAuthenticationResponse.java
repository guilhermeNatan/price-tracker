package com.price.tracker.controller.payload;

import lombok.Getter;
import lombok.Setter;

/**
 * Resposta para autenciação.
 */
@Getter
@Setter
public class JwtAuthenticationResponse
{
  private String accessToken;
  private String tokenType = "Bearer";

  /**
   * @param accessToken Token de acesso .
   */
  public JwtAuthenticationResponse(String accessToken)
  {
    this.accessToken = accessToken;
  }

}
