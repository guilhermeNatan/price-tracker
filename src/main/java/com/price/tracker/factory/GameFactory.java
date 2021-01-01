package com.price.tracker.factory;

import com.price.tracker.entity.Game;
import com.price.tracker.entity.Platform;
import com.price.tracker.entity.PlatformEnum;
import com.price.tracker.entity.PlaystationStoreGameInfo;
import com.price.tracker.repository.GameRepo;
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
    private PlatformFactory platformFactory;

    @Override
    public Game createToTest(boolean save) {
        Game game = new Game();
        game.setName("The last of us");

        if(save) {
            return gameRepo.save(game);
        }

        return game;
    }

    public Game createPstoreGame(boolean save , PstoreGameVo vo) {
        Game game = new Game();
        game.setName(vo.getName());
        PlaystationStoreGameInfo psInfo = psStoreInfoFactory.create(save, vo);
        game.setPlaystionStoreInfo(psInfo);


        Platform platform = platformFactory.create(save, PlatformEnum.PLAYSTATION_4);
        game.addPlatform(platform);
        if(save) {
            return gameRepo.save(game);
        }

        return game;
    }
}
