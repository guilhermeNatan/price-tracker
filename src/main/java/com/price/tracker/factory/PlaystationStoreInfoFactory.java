package com.price.tracker.factory;

import com.price.tracker.entity.PlaystationStoreInfo;
import com.price.tracker.repository.PlaystationStoreInfoRepo;
import com.price.tracker.vo.PstoreGameVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PlaystationStoreInfoFactory extends BaseFactory<PlaystationStoreInfo>{

    @Autowired
    private PlaystationStoreInfoRepo psInfoRepo;

    @Deprecated
    @Override
    public PlaystationStoreInfo create(boolean save)
    {
        return null;
    }


    public PlaystationStoreInfo create(boolean save, PstoreGameVo pstoreGameVo) {

        PlaystationStoreInfo psinfo = new PlaystationStoreInfo();
        psinfo.setPlaystionStoreIndex(pstoreGameVo.getIndex());
        psinfo.setPlaystationStoreId(pstoreGameVo.getId());
        if(save) {
          return   psInfoRepo.save(psinfo);
        }
        return psinfo;
    }


}
