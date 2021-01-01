package com.price.tracker.repository;

import com.price.tracker.entity.Store;
import org.springframework.data.repository.cdi.Eager;

@Eager
public interface StoreRepo extends BaseRepo<Store> {
}
