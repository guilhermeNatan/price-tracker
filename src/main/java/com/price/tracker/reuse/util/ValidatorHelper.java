package com.price.tracker.reuse.util;

import com.price.tracker.entity.BaseEntity;
import com.price.tracker.repository.BaseRepo;

public class ValidatorHelper {

    public static   <T extends BaseEntity> T  validateAndSaveIfNecessary( Boolean save, T entity, BaseRepo<T> repo) {

        if(entity.validate() && save) {
            repo.save(entity);
        }
        return entity;
    }
}
