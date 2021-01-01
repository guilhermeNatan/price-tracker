package com.price.tracker.entity;

import com.price.tracker.factory.StoreFactory;
import com.price.tracker.repository.StoreRepo;
import org.springframework.beans.factory.annotation.Autowired;

public class StoreTest extends BaseTest {
    private final boolean SAVE = true;
    @Autowired
    private StoreRepo repo;
    @Autowired
    private StoreFactory factory;

    @Override
    public void createEntityTest() {
        factory.createToTest(SAVE);
    }

    @Override
    public void deleteEntityTest() {
        Store store = factory.createToTest(SAVE);
        repo.delete(store);

    }
}
