package com.price.tracker.service;

import com.price.tracker.entity.*;
import com.price.tracker.factory.GameFactory;
import com.price.tracker.factory.PriceFactory;
import com.price.tracker.repository.GameRepo;
import com.price.tracker.repository.PlaystationStoreInfoRepo;
import com.price.tracker.repository.PriceRepo;
import com.price.tracker.repository.StoreRepo;
import com.price.tracker.reuse.util.DateUtil;
import com.price.tracker.vo.PstoreGameVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.Calendar;
import java.util.Optional;

@Component
public class GameService extends BaseService<Game> {

    @Autowired
    private GameRepo repo;

    @Autowired
    private GameFactory gameFactory;


    @Autowired
    private PriceFactory priceFactory;

    @Autowired
    private StoreRepo storeRepo;

    @Autowired
    private PriceRepo priceRepo;


    @Override
    protected JpaRepository<Game, Long> getEntityRepository() {
        return repo;
    }

    @Override
    public void validateBeforeSave(Game entity) {
    }

    public void createPstoreGame( PstoreGameVo pstoreGameVo ) {
        gameFactory.createPstoreGame(true, pstoreGameVo);
    }

    private void registerPricePstoreGame(Game game, Double value ) {
        Store store = storeRepo.findStoreByCodigo(StoreEnum.PLAYSTATION_STORE);
        Optional<Price> priceWrapper = priceRepo.findFirstByGameAndStoreOrderByCreateAtDesc(game, store);
        if( registerPrice(priceWrapper, value) ){
            priceFactory.create(true, game,store , value);
        }
    }
    private boolean registerPrice(Optional<Price> price, Double newValue ) {
        return !price.isPresent() || !price.get().getValue().equals(newValue);
    }

    public void updateOrCreatePstoreGame(PstoreGameVo pstoreGameVo ) {
        Optional<Game> gameWrapper = repo.findByPstoreId(pstoreGameVo.getId());
        if(gameWrapper.isPresent()) {

            this.registerPricePstoreGame(gameWrapper.get(), pstoreGameVo.getPrice());
        }else {
            this.createPstoreGame(pstoreGameVo);
        }
    }

}
