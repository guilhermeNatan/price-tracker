package com.price.tracker.repository;

import com.price.tracker.entity.Platform;
import org.springframework.data.repository.cdi.Eager;

@Eager
public interface PlatformRepo extends BaseRepo<Platform>{
}
