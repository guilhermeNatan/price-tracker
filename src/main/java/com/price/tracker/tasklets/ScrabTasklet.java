package com.price.tracker.tasklets;

import com.price.tracker.controller.Scrab;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScrabTasklet {
    @Autowired
    private Scrab scrab;

//    @Scheduled(cron = "0 0/1 * 1/1 * ?")
//    @Scheduled(cron = "0 0 0/6 1/1 * ?")
    public void scrabPsStore() {

        scrab.psStoreScrab("https://store.playstation.com/pt-br/category/85448d87-aa7b-4318-9997-7d25f4d275a4");
    }
}
