package com.price.tracker.factory;

import com.price.tracker.entity.PlaystationStoreGameInfo;
import com.price.tracker.repository.PlaystationStoreInfoRepo;
import com.price.tracker.vo.PstoreGameVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PlaystationStoreInfoFactory extends BaseFactory<PlaystationStoreGameInfo>{

    @Autowired
    private PlaystationStoreInfoRepo psInfoRepo;

    @Deprecated
    @Override
    public PlaystationStoreGameInfo createToTest(boolean save)
    {
        return null;
    }


    public PlaystationStoreGameInfo create(boolean save, PstoreGameVo pstoreGameVo) {

        PlaystationStoreGameInfo psinfo = new PlaystationStoreGameInfo();
        psinfo.setPlaystionStoreIndex(pstoreGameVo.getIndex());
        psinfo.setPlaystationStoreId(pstoreGameVo.getId());
        if(save) {
          return   psInfoRepo.save(psinfo);
        }
        return psinfo;
    }


}
