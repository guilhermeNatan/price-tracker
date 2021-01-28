package com.price.tracker.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


/**
 * <p> Finalidade da Classe: Entidade de clientes.</p>
 *
 * <p> Copyright: Copyright (c) Synergia - DCC - UFMG </p>
 */
@Entity
@Getter
@Setter
@ToString(of = "id")
@NoArgsConstructor
@Table(name = "user", uniqueConstraints = {
  @UniqueConstraint(columnNames = {
    "email"
  })
})
public class User extends AbstractUser
{

  @Override
  @NotBlank
  @Column(name = "senha")
  @Size(max = 100)
  public String getPassword()
  {
    return super.getPassword();
  }


}
