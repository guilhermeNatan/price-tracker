package com.price.tracker.entity;


import com.price.tracker.factory.PriceFactory;
import com.price.tracker.repository.PriceRepo;
import org.springframework.beans.factory.annotation.Autowired;

public class PriceTest extends BaseTest {
    private  final Boolean SAVE = true;

    @Autowired
    private PriceFactory priceFactory;

    @Autowired
    private PriceRepo repo;

    @Override
    public void createEntityTest() {
        priceFactory.createToTest(SAVE);
    }

    @Override
    public void deleteEntityTest() {
        Price price = priceFactory.createToTest(SAVE);
        repo.delete(price);
    }
}
