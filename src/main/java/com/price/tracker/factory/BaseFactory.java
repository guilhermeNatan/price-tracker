package com.price.tracker.factory;

import com.price.tracker.entity.BaseEntity;
import org.springframework.stereotype.Component;

@Component
public abstract class BaseFactory<T extends BaseEntity> {

    /**
     * @param save true if persist object
     * @return a new object
     */
    public abstract  T createToTest(boolean save);

}
