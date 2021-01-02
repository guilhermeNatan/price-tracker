package com.price.tracker.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.price.tracker.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class Scrab {

    private static ObjectMapper mapper = new ObjectMapper();

    private static final  String PSTORE_URL = "https://store.playstation.com/pt-br/category/85448d87-aa7b-4318-9997-7d25f4d275a4";


    @Autowired
    private GameService gameService;

    public void psStoreScrab(String url)  {

        List<Thread> threads = Arrays.asList(new Thread(new PstoreParallelScrab(1, 10, url, gameService)),
                new Thread(new PstoreParallelScrab(11, 20, url, gameService)),
                new Thread(new PstoreParallelScrab(21, 30, url, gameService)),
                new Thread(new PstoreParallelScrab(31, 40, url, gameService)),
                new Thread(new PstoreParallelScrab(41, 50, url, gameService)),
                new Thread(new PstoreParallelScrab(51, 60, url, gameService)),
                new Thread(new PstoreParallelScrab(61, 70, url, gameService)),
                new Thread(new PstoreParallelScrab(71, 80, url, gameService)),
                new Thread(new PstoreParallelScrab(81, 89, url, gameService))
        );

        threads.forEach(Thread::start);
        while (!allThreadsIsDied(threads));
    }

    public  boolean allThreadsIsDied(List<Thread> threads) {
        return threads.stream().filter(thread -> !thread.isAlive()).count() == (long) threads.size();
    }

}
