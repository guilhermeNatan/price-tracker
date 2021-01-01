package com.price.tracker.factory;

import com.price.tracker.entity.Game;
import com.price.tracker.entity.Price;
import com.price.tracker.entity.Store;
import com.price.tracker.repository.GameRepo;
import com.price.tracker.repository.PriceRepo;
import com.price.tracker.repository.StoreRepo;
import com.price.tracker.reuse.util.ValidatorHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PriceFactory  extends BaseFactory<Price> {

    @Autowired
    private PriceRepo priceRepo;

    @Autowired
    private GameFactory gameFactory;

    @Autowired
    private StoreFactory storeFactory;


    @Override
    public Price createToTest(boolean save) {
        Game game = gameFactory.createToTest(save);
        Store store = storeFactory.createToTest(save);
        return create(save, game, store, 20.0);
    }

    public Price create(boolean salve, Game game, Store store, Double value) {
        Price price = new Price();
        price.setValue(value);
        price.setGame(game);
        price.setStore(store);
        return  ValidatorHelper.validateAndSaveIfNecessary(salve, price, priceRepo);
    }

}
