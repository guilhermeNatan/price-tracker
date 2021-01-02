package com.price.tracker.service;

import com.price.tracker.entity.Game;
import com.price.tracker.repository.GameRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public class GameService extends BaseService<Game> {

    @Autowired
    private GameRepo repo;

    @Override
    protected JpaRepository<Game, Long> getEntityRepository() {
        return repo;
    }

    @Override
    public void validateBeforeSave(Game entity) {

    }
}
