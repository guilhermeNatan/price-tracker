package com.price.tracker.repository;

import com.price.tracker.entity.Game;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.cdi.Eager;

import java.util.Optional;

@Eager
public interface GameRepo extends BaseRepo<Game> {

    @Query("select g from Game g where  g.playstionStoreInfo.playstationStoreId =  ?1 ")
    Optional<Game> findByPstoreId(String pstoreId);

    @Query("select g from Game g where g.name like %?1%  order by  g.name asc")
    Page<Game> findByName(String name, Pageable pageable);

}
