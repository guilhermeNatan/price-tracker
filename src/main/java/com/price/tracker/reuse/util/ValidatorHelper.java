package com.price.tracker.reuse.util;

import com.price.tracker.entity.BaseEntity;
import com.price.tracker.repository.BaseRepo;

public class ValidatorHelper {

    public static   <T extends BaseEntity> T  validateAndSaveIfNecessary(T entity, Boolean save, BaseRepo<T> repo) {

        if(entity.validate() && save) {
            repo.save(entity);
        }
        return entity;
    }
}
