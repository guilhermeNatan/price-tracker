package com.price.tracker.service;

import com.price.tracker.entity.*;
import com.price.tracker.factory.GameFactory;
import com.price.tracker.factory.PriceFactory;
import com.price.tracker.repository.GameRepo;
import com.price.tracker.repository.PlaystationStoreInfoRepo;
import com.price.tracker.repository.PriceRepo;
import com.price.tracker.repository.StoreRepo;
import com.price.tracker.vo.PstoreGameVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

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

    @Autowired
    private PlaystationStoreInfoRepo psStoreInfoRepo;


    @Override
    protected JpaRepository<Game, Long> getEntityRepository() {
        return repo;
    }

    @Override
    public void validateBeforeSave(Game entity) {
    }

    public void createPstoreGame( PstoreGameVo pstoreGameVo, Platform platform, Store store ) {
        gameFactory.createPstoreGame(true, pstoreGameVo, platform, store);
    }

    private void registerPricePstoreGame(Game game, Double value ) {
        Optional<Store> store = storeRepo.findFirstByCodigo(StoreEnum.PLAYSTATION_STORE);
        Optional<Price> priceWrapper = priceRepo.findFirstByGameAndStoreOrderByCreateAtDesc(game,
                store.get());
        if( registerPrice(priceWrapper, value) ){
            priceFactory.create(true, game,store.get() , value);
        }
    }
    private boolean registerPrice(Optional<Price> price, Double newValue ) {
        return !price.isPresent() || !price.get().getValue().equals(newValue);
    }

    public void updateOrCreatePstoreGame(PstoreGameVo pstoreGameVo,  Platform platform, Store store ) {
        if(pstoreGameVo.isAvailableGame()) {
            Optional<Game> gameWrapper = repo.findByPstoreId(pstoreGameVo.getId());
            if(gameWrapper.isPresent()) {
                Game game = gameWrapper.get();
                PlaystationStoreGameInfo psInfo = game.getPlaystionStoreInfo();
                psInfo.setPresentInPsplus(pstoreGameVo.isAPsplusGame());
                psInfo.setAvalilable(pstoreGameVo.isAvailableGame());
                psStoreInfoRepo.save(psInfo);
                this.registerPricePstoreGame(gameWrapper.get(), pstoreGameVo.getPriceValue());
            }else {
                this.createPstoreGame(pstoreGameVo, platform, store);
            }
        }

    }

}
