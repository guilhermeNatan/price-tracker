package com.price.tracker.entity;

import com.price.tracker.factory.GameFactory;
import com.price.tracker.repository.GameRepo;
import com.price.tracker.vo.PstoreGameVo;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

@Setter
public class GameTest extends BaseTest {

    @Autowired
    private GameFactory gameFactory;

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
}
