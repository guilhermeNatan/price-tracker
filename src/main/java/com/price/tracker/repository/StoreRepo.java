package com.price.tracker.repository;

import com.price.tracker.entity.Store;
import com.price.tracker.entity.StoreEnum;
import org.springframework.data.repository.cdi.Eager;

import java.util.Optional;

@Eager
public interface StoreRepo extends BaseRepo<Store> {
     Optional<Store> findFirstByCodigo(StoreEnum codigo);

}
