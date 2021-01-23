/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

package com.price.tracker.factory;

import com.price.tracker.entity.Role;
import com.price.tracker.entity.RoleName;
import com.price.tracker.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class RoleFactory extends BaseFactory<Role> {
    @Autowired
    private RoleRepository repository;

    @Override
    public Role createToTest(boolean save) {
        return null;
    }

    public Role createIfNotExist(boolean save, RoleName name) {
        Optional<Role> roleWrapper = repository.findByName(name);
        if(roleWrapper.isPresent()){
            return  roleWrapper.get();
        }
        Role role = new Role();
        role.setName(name);
       return repository.save(role);
    }
}
