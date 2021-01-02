package com.price.tracker.service;

import com.price.tracker.entity.Game;
import com.price.tracker.entity.PlaystationStoreGameInfo;
import com.price.tracker.entity.Store;
import com.price.tracker.entity.StoreEnum;
import com.price.tracker.factory.GameFactory;
import com.price.tracker.factory.PriceFactory;
import com.price.tracker.repository.GameRepo;
import com.price.tracker.repository.PlaystationStoreInfoRepo;
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
    private PlaystationStoreInfoRepo pstoreInfoRepo;

    @Autowired
    private PriceFactory priceFactory;

    @Autowired
    private StoreRepo storeRepo;


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
        priceFactory.create(true, game,store , value);
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
