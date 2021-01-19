package com.price.tracker.entity;

import com.price.tracker.factory.GameFactory;
import com.price.tracker.repository.GameRepo;
import com.price.tracker.repository.PlatformRepo;
import com.price.tracker.repository.StoreRepo;
import com.price.tracker.service.GameService;
import com.price.tracker.vo.PstoreGameVo;
import lombok.Setter;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

@Setter
public class GameTest extends BaseTest {

    @Autowired
    private GameFactory gameFactory;

    @Autowired
    private GameService gameService;

    @Autowired
    private GameRepo repo;

    @Autowired
    private PlatformRepo platformRepo;


    @Autowired
    private StoreRepo storeRepo;


    @Override
    public void createEntityTest() {
        try {
            Optional<Platform> platformWrapper = platformRepo.findFirstByName(PlatformEnum.PLAYSTATION_4);
            Optional<Store> store = storeRepo.findFirstByCodigo(StoreEnum.PLAYSTATION_STORE);
            PstoreGameVo gameVo = GameTestHelper.createPstoreVo();
            gameFactory.createPstoreGame(true, gameVo, platformWrapper.get(), store.get());
        }catch (Exception e) {
            fail("Fail on create game: "+ e.getMessage());
        }
     }

    @Override
    public void deleteEntityTest() {

        try {
            Game game = gameFactory.createToTest(true);
            repo.delete(game);
        }catch (Exception e) {
            fail("Fail on delete game: "+ e.getMessage());
        }
    }

    @Test
    public void givenAPstoreGameVoUpdateOrCreateAGame() {
        Optional<Platform> platformWrapper = platformRepo.findFirstByName(PlatformEnum.PLAYSTATION_4);

        Optional<Store> storeWrapper = storeRepo.findFirstByCodigo(StoreEnum.PLAYSTATION_STORE);
        final String PSSTORE_ID = "pstoreId";
        PstoreGameVo pstoreVo = GameTestHelper.createPstoreVo();
        pstoreVo.setId(PSSTORE_ID);
        pstoreVo.setPrice("R$ 60,00");
        gameService.updateOrCreatePstoreGame(pstoreVo, platformWrapper.get(), storeWrapper.get());
        Optional<Game> game = repo.findByPstoreId(PSSTORE_ID);
        assertTrue(game.isPresent());
        assertEquals(1, game.get().getPrices().size());
         pstoreVo = GameTestHelper.createPstoreVo();
        pstoreVo.setId(PSSTORE_ID);
        pstoreVo.setPrice("R$ 50,00");
        gameService.updateOrCreatePstoreGame(pstoreVo, platformWrapper.get(), storeWrapper.get());
        game = repo.findByPstoreId(PSSTORE_ID);
        assertEquals(2, game.get().getPrices().size());
    }
}
