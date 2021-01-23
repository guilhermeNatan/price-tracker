package com.price.tracker.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

/**
 * <p> Finalidade da Classe: Entidade de Usuarios.</p>
 *
 * <p> Copyright: Copyright (c) Synergia - DCC - UFMG </p>
 */
@MappedSuperclass
@Getter
@Setter
public abstract class User extends BaseEntity
{
  @NotBlank
  @Size(max = 100)
  private String nome;

  @NotBlank
  @Size(max = 100)
  @Email
  private String email;

  @NotBlank
  @Size(max = 100)
  private String password;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(name = "user_roles",
    joinColumns = @JoinColumn(name = "user_id"),
    inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new HashSet<>();

  @Column(name = "reset_token")
  private String resetToken;

  /**
   * Construtor padrão .
   */
  public User()
  {

  }

  /**
   * @param nome     nome do usuário
   * @param email    email do usuario
   * @param password senha
   */
  public User(String nome, String email, String password)
  {
    this.nome = nome;
    this.email = email;
    this.password = password;
  }

  /**
   * Adiciona uma nova role para os usuários.
   * @param role {@link Role}
   */
  public void adicionarRole(Role role)
  {
    roles.add(role);
  }
}
