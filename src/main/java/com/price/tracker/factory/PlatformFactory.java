package com.price.tracker.factory;

import com.price.tracker.entity.Platform;
import com.price.tracker.repository.PlatformRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PlatformFactory extends BaseFactory<Platform> {
    @Autowired
    private PlatformRepo platformRepo;

    @Override
    public Platform create(boolean save) {
        return create(save, "Playstation Store");
    }

    public Platform create(boolean save, String name) {
        Platform platform = new Platform();
        platform.setName(name);
        if(save) {
         return platformRepo.save(platform);
        }
        return platform;
    }
}
