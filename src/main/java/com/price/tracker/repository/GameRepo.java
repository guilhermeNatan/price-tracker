package com.price.tracker.repository;

import com.price.tracker.entity.Game;
import org.springframework.data.repository.cdi.Eager;

@Eager
public interface GameRepo extends BaseRepo<Game> {
}
