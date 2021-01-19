package com.price.tracker.entity;

import com.price.tracker.factory.PlatformFactory;
import com.price.tracker.repository.PlatformRepo;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

@Setter
public class PlatformTest  extends BaseTest{

    @Autowired
    private PlatformFactory platformFactory;
    @Autowired
    private PlatformRepo platformRepo;

    @Override
    public void createEntityTest() {
        platformFactory.create(true, PlatformEnum.PLAYSTATION_4);
    }

    @Override
    public void deleteEntityTest() {
        Platform platform = platformFactory.create(true, PlatformEnum.PLAYSTATION_5);
        platformRepo.delete(platform);
    }
}
