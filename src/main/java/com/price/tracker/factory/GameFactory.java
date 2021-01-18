package com.price.tracker.factory;

import com.price.tracker.entity.*;
import com.price.tracker.repository.GameRepo;
import com.price.tracker.reuse.util.ValidatorHelper;
import com.price.tracker.vo.PstoreGameVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class GameFactory extends BaseFactory<Game> {

    @Autowired
    private GameRepo gameRepo;

    @Autowired
    private PlaystationStoreInfoFactory psStoreInfoFactory;


    @Autowired
    private PriceFactory priceFactory;



    @Override
    public Game createToTest(boolean save) {
        Game game = new Game();
        game.setName("The last of us");
        return ValidatorHelper.validateAndSaveIfNecessary(save, game, gameRepo);
    }

    public Game createPstoreGame(boolean save , PstoreGameVo vo, Platform platform, Store store ) {

            Game game = new Game();
            game.setName(vo.getName());
            GamePlatform gamePlatform = new GamePlatform();
            gamePlatform.setGame(game);
            gamePlatform.setPlatform(platform);
            game.addGamePlatform(gamePlatform);

            ValidatorHelper.validateAndSaveIfNecessary(save, game, gameRepo);
            PlaystationStoreGameInfo psInfo = psStoreInfoFactory.create(save, vo, game);
            game.setPlaystionStoreInfo(psInfo);
            if(vo.isAvailableGame()) {
                priceFactory.create(save, game, store, vo.getPriceValue());
            }
            return game;
    }

}
