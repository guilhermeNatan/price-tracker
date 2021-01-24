package com.price.tracker.config;

import com.price.tracker.entity.PlatformEnum;
import com.price.tracker.entity.RoleName;
import com.price.tracker.entity.StoreEnum;
import com.price.tracker.factory.PlatformFactory;
import com.price.tracker.factory.RoleFactory;
import com.price.tracker.factory.StoreFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    private PlatformFactory platformFactory;
    @Autowired
    private StoreFactory storeFactory;

    @Autowired
    private RoleFactory roleFactory;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        final Boolean SAVE = true;
        platformFactory.create(SAVE, PlatformEnum.PLAYSTATION_4);
        platformFactory.create(SAVE, PlatformEnum.PLAYSTATION_5);
        storeFactory.create(SAVE, StoreEnum.PLAYSTATION_STORE, "https://store.playstation.com");
        roleFactory.createIfNotExist(SAVE, RoleName.ROLE_USER);
    }
}
