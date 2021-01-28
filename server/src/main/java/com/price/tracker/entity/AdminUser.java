package com.price.tracker.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * Entidade que representa um usuário que pode gerenciar algum módulo do sistema .
 */
@Entity
@Table(name = "admin_user", uniqueConstraints = {
  @UniqueConstraint(columnNames = {
    "username"
  }),
  @UniqueConstraint(columnNames = {
    "email"
  })
})
@Getter
@Setter
public class AdminUser extends AbstractUser
{

  @NotBlank
  @Size(max = 45)
  private String username;

  @Column(name = "status")
  private Boolean ativo;

}
