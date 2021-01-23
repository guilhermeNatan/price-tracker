package com.price.tracker.controller.payload;

import com.price.tracker.entity.RoleName;
import lombok.Getter;
import lombok.Setter;

/**
 * Payload para cadastro de usuário administrador .
 */
@Getter
@Setter
public class SignUpAdminUser extends SignUpRequest
{

  private String username;
  private RoleName rolename;

}
