/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

package com.price.tracker.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@MappedSuperclass
@Getter
@Setter
public  abstract class  AbstractUser  extends BaseEntity {
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
     * Adiciona uma nova role para os usuários.
     * @param role {@link Role}
     */
    public void adicionarRole(Role role)
    {
        roles.add(role);
    }
}
