package com.price.tracker.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

/**
 * Regras de acesso .
 */
@Entity
@Table(name = "roles")
@Getter
@Setter
public class Role extends BaseEntity
{

  @Enumerated(EnumType.STRING)
  @NaturalId
  @Column(length = 60)
  private RoleName name;

  /**
   * Construtor padrão .
   */
  public Role()
  {

  }

  /**
   * Construtor com RoleName .
   * @param name {@link RoleName}
   */
  public Role(RoleName name)
  {
    this.name = name;
  }


}
