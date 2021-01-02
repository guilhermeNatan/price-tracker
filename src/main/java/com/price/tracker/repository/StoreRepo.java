package com.price.tracker.repository;

import com.price.tracker.entity.Store;
import com.price.tracker.entity.StoreEnum;
import org.springframework.data.repository.cdi.Eager;

@Eager
public interface StoreRepo extends BaseRepo<Store> {
     Store findStoreByCodigo(StoreEnum codigo);
}
