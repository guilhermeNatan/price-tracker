package com.price.tracker.factory;

import com.price.tracker.entity.*;
import com.price.tracker.repository.GameRepo;
import com.price.tracker.repository.StoreRepo;
import com.price.tracker.reuse.util.ValidatorHelper;
import com.price.tracker.vo.PstoreGameVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class GameFactory extends BaseFactory<Game> {

    @Autowired
    private GameRepo gameRepo;

    @Autowired
    private PlaystationStoreInfoFactory psStoreInfoFactory;

    @Autowired
    private PlatformFactory platformFactory;

    @Autowired
    private PriceFactory priceFactory;

    @Autowired
    private StoreRepo storeRepo;

    @Override
    public Game createToTest(boolean save) {
        Game game = new Game();
        game.setName("The last of us");
        return ValidatorHelper.validateAndSaveIfNecessary(save, game, gameRepo);
    }

    public Game createPstoreGame(boolean save , PstoreGameVo vo) {
        Game game = new Game();
        game.setName(vo.getName());
        Platform platform = platformFactory.create(save, PlatformEnum.PLAYSTATION_4);
        game.addPlatform(platform);
        Optional<Store> store = storeRepo.findFirstByCodigo(StoreEnum.PLAYSTATION_STORE);
        ValidatorHelper.validateAndSaveIfNecessary(save, game, gameRepo);
        PlaystationStoreGameInfo psInfo = psStoreInfoFactory.create(save, vo, game);
        game.setPlaystionStoreInfo(psInfo);
        if(vo.isAvailableGame()) {
            priceFactory.create(save, game, store.get(), vo.getPriceValue());
        }
        return game;

    }

}
