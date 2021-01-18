package com.price.tracker.service;

import com.price.tracker.entity.Platform;
import com.price.tracker.entity.PlatformEnum;
import com.price.tracker.repository.PlatformRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class PlatformService   extends BaseService<Platform>{

    @Autowired
    private PlatformRepo platformRepo;

    @Override
    protected JpaRepository<Platform, Long> getEntityRepository() {
        return platformRepo;
    }

    public Optional<Platform> findPlatformByName(PlatformEnum name) {
        return platformRepo.findFirstByName(name);
    }

    @Override
    public void validateBeforeSave(Platform entity) {

    }
}
