package com.price.tracker.entity;

import com.price.tracker.vo.PstoreGameVo;

public class GameTestHelper {

   public static  PstoreGameVo createPstoreVo() {
       PstoreGameVo gameVo = new PstoreGameVo();
       gameVo.setId("PS_ID_1");
       gameVo.setIndex(1);
       gameVo.setName("The last of us");
       gameVo.setPrice("R$ 20,00");
       return gameVo;
   }
}
