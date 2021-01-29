package com.price.tracker.factory;

import com.price.tracker.entity.Store;
import com.price.tracker.entity.StoreEnum;
import com.price.tracker.repository.StoreRepo;
import com.price.tracker.reuse.util.ValidatorHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class StoreFactory extends BaseFactory<Store> {

    @Autowired
    private StoreRepo repo;

    @Override
    public Store createToTest(boolean save) {
        return  create(save,StoreEnum.PLAYSTATION_STORE, "https://www.pstore.com" );
    }

    public Store create(boolean save, StoreEnum codigo, String url) {
        Store store= new Store();
        store.setCodigo(codigo);
        store.setLink(url);
        return  ValidatorHelper.validateAndSaveIfNecessary(save, store, repo);
    }

    public Store createIfNotExist(boolean save, StoreEnum codigo, String url) {
        Optional<Store> store = repo.findFirstByCodigo(codigo);
        return store.orElseGet(() -> this.create(save, codigo, url));
    }
}
