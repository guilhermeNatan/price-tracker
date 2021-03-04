package com.price.tracker.config;

import com.price.tracker.entity.RoleName;
import com.price.tracker.factory.RoleFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {


    @Autowired
    private RoleFactory roleFactory;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        final Boolean SAVE = true;
        roleFactory.createIfNotExist(SAVE, RoleName.ROLE_USER);
    }
}
