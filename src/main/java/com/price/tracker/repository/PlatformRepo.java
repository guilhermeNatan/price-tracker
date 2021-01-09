package com.price.tracker.repository;

import com.price.tracker.entity.Platform;
import com.price.tracker.entity.PlatformEnum;
import org.springframework.data.repository.cdi.Eager;

import java.util.Optional;

@Eager
public interface PlatformRepo extends BaseRepo<Platform>{
    Optional<Platform> findFirstByName(PlatformEnum name);
}
