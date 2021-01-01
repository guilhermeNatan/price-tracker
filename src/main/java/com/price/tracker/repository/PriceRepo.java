package com.price.tracker.repository;

import com.price.tracker.entity.Price;
import org.springframework.data.repository.cdi.Eager;

@Eager
public interface PriceRepo extends BaseRepo<Price> {
}
