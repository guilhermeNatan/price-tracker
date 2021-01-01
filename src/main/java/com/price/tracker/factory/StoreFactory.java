package com.price.tracker.factory;

import com.price.tracker.entity.Store;
import com.price.tracker.repository.StoreRepo;
import com.price.tracker.reuse.util.ValidatorHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class StoreFactory extends BaseFactory<Store> {

    @Autowired
    private StoreRepo repo;

    @Override
    public Store createToTest(boolean save) {
        return  create(save,"Playstation Store", "https://www.pstore.com" );
    }

    public Store create(boolean save, String name, String url) {
        Store store= new Store();
        store.setName(name);
        store.setLink(url);
        return  ValidatorHelper.validateAndSaveIfNecessary(save, store, repo);
    }
}
