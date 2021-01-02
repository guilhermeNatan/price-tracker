package com.price.tracker.entity;


import com.price.tracker.factory.GameFactory;
import com.price.tracker.factory.PlaystationStoreInfoFactory;
import com.price.tracker.repository.PlaystationStoreInfoRepo;
import com.price.tracker.vo.PstoreGameVo;
import org.springframework.beans.factory.annotation.Autowired;

public class PlaystationStoreGameInfoTest extends BaseTest {
    @Autowired
    private PlaystationStoreInfoFactory factory;
    @Autowired
    private PlaystationStoreInfoRepo repo;

    @Autowired
    private GameFactory gameFactory;
    @Override
    public void createEntityTest() {
        Game game = gameFactory.createToTest(true);
        PstoreGameVo pstoreVo = GameTestHelper.createPstoreVo();
        factory.create(true, pstoreVo,game );
    }

    @Override
    public void deleteEntityTest() {
        Game game = gameFactory.createToTest(true);
        PstoreGameVo pstoreVo = GameTestHelper.createPstoreVo();
        PlaystationStoreGameInfo playstationGameStoreInfo =  factory.create(true, pstoreVo ,game);
        repo.delete(playstationGameStoreInfo);
    }
}
