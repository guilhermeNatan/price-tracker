package com.price.tracker.entity;


import com.price.tracker.factory.PriceFactory;
import com.price.tracker.repository.PriceRepo;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Calendar;
import java.util.Optional;

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

    @Test
    public void convertValueTest() {
        assertEquals(20.0, Price.convertValue("R$ 20,00"));
        assertEquals(20.54, Price.convertValue("R$ 20,54"));
        assertEquals(0.54, Price.convertValue("R$ 0,54"));
        assertEquals(0.54, Price.convertValue("0,54"));
        assertEquals(0.0, Price.convertValue(""));
        assertEquals(0.0, Price.convertValue(null));
        assertEquals(0.0, Price.convertValue(" "));

    }

    @Test
    public void givenAPriceGameAndStoreFindits(){
        Price price = priceFactory.createToTest(true);
        Optional<Price> priceWrapper = repo.findByGameAndStoreAndAndCreateAt(price.getGame(),
                price.getStore(), Calendar.getInstance());
        assertTrue(priceWrapper.isPresent());
    }

    @Test
    public void givenAPriceValueGameAndStore(){
        Price price = priceFactory.createToTest(true);
        Optional<Price> priceWrapper = repo.findFirstByGameAndStoreOrderByCreateAtDesc(price.getGame(),
                price.getStore());
        assertEquals(priceWrapper.get().getValue() , 20.0);
        priceFactory.create(true, price.getGame(), price.getStore(), 15.0);
        priceWrapper = repo.findFirstByGameAndStoreOrderByCreateAtDesc(price.getGame(),
                price.getStore());
        assertEquals(priceWrapper.get().getValue() , 15.0);
    }
}
