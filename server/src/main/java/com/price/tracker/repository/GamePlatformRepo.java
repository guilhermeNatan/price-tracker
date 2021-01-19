package com.price.tracker.repository;

import com.price.tracker.entity.GamePlatform;
import org.springframework.data.repository.cdi.Eager;

@Eager
public interface GamePlatformRepo extends BaseRepo<GamePlatform>{


}
