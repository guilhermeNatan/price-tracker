package com.price.tracker.repository;

import com.price.tracker.entity.Game;
import com.price.tracker.entity.Price;
import com.price.tracker.entity.Store;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.cdi.Eager;

import java.util.Calendar;
import java.util.Optional;

@Eager
public interface PriceRepo extends BaseRepo<Price> {

    @Query("SELECT DISTINCT c FROM Price c " +
            "WHERE c.game = :game AND c.store = :store AND  CAST(c.createAt AS date) = CAST(:create AS date) ")
    Optional<Price> findByGameAndStoreAndAndCreateAt(Game game, Store store, Calendar create);


    Optional<Price> findFirstByGameAndStoreOrderByCreateAtDesc(Game game, Store store);
}
