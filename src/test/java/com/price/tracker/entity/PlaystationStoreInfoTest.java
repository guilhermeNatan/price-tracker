package com.price.tracker.entity;


import com.price.tracker.factory.PlaystationStoreInfoFactory;
import com.price.tracker.repository.PlaystationStoreInfoRepo;
import com.price.tracker.vo.PstoreGameVo;
import org.springframework.beans.factory.annotation.Autowired;

public class PlaystationStoreInfoTest extends BaseTest {
    @Autowired
    private PlaystationStoreInfoFactory factory;
    @Autowired
    private PlaystationStoreInfoRepo repo;

    @Override
    public void createEntityTest() {
        PstoreGameVo pstoreVo = GameTestHelper.createPstoreVo();
        factory.create(true, pstoreVo );
    }

    @Override
    public void deleteEntityTest() {
        PstoreGameVo pstoreVo = GameTestHelper.createPstoreVo();
        PlaystationStoreInfo playstationStoreInfo =  factory.create(true, pstoreVo );
        repo.delete(playstationStoreInfo);
    }
}
