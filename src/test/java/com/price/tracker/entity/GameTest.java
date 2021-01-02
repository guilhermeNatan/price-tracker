package com.price.tracker.entity;

import com.price.tracker.factory.GameFactory;
import com.price.tracker.repository.GameRepo;
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

    @Override
    public void createEntityTest() {
        try {
            PstoreGameVo gameVo = GameTestHelper.createPstoreVo();
            gameFactory.createPstoreGame(true, gameVo);
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
        final String PSSTORE_ID = "pstoreId";
        PstoreGameVo pstoreVo = GameTestHelper.createPstoreVo();
        pstoreVo.setId(PSSTORE_ID);
        pstoreVo.setPrice("R$ 60,00");
        gameService.updateOrCreatePstoreGame(pstoreVo);
        Optional<Game> game = repo.findByPstoreId(PSSTORE_ID);
        assertTrue(game.isPresent());
        assertEquals(1, game.get().getPrices().size());
         pstoreVo = GameTestHelper.createPstoreVo();
        pstoreVo.setId(PSSTORE_ID);
        pstoreVo.setPrice("R$ 50,00");
        gameService.updateOrCreatePstoreGame(pstoreVo);
        game = repo.findByPstoreId(PSSTORE_ID);
        assertEquals(2, game.get().getPrices().size());
    }
}
