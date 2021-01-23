/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

package com.price.tracker.service;


import com.price.tracker.entity.Role;
import com.price.tracker.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

public class RoleService  extends BaseService<Role>{
    @Autowired
    private RoleRepository roleRepository;

    @Override
    protected JpaRepository<Role, Long> getEntityRepository() {
        return roleRepository;
    }



    @Override
    public void validateBeforeSave(Role entity) {

    }
}
