package com.price.tracker.repository;

import com.price.tracker.entity.PlaystationStoreInfo;
import org.springframework.data.repository.cdi.Eager;

@Eager
public interface PlaystationStoreInfoRepo extends BaseRepo<PlaystationStoreInfo>{
}
