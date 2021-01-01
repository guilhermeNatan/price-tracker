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
        platformFactory.create(true, "Xbox 360");
    }

    @Override
    public void deleteEntityTest() {
        Platform platform = platformFactory.create(true, "Xbox 360");
        platformRepo.delete(platform);
    }
}
