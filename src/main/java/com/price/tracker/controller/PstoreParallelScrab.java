package com.price.tracker.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.price.tracker.entity.Platform;
import com.price.tracker.entity.Store;
import com.price.tracker.service.GameService;
import com.price.tracker.vo.PstoreGameVo;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

@Data
@NoArgsConstructor
public class PstoreParallelScrab implements Runnable {

    private int startIdex;
    private int endIndex;
    private String baseUrl;
    private  ObjectMapper mapper = new ObjectMapper();
    private GameService gameService;
    private Platform platform;
    private Store store;

    public PstoreParallelScrab(int startIdex, int endIndex, String baseUrl, GameService gameService, Platform platform, Store store) {
        this.startIdex = startIdex;
        this.endIndex = endIndex;
        this.baseUrl = baseUrl;
        this.gameService = gameService;
        this.platform = platform;
        this.store = store;
    }


    @Override
    public void run() {
        for(int i =startIdex; i<=endIndex; i++){
            System.out.println("Page: {} " + i);
            Document doc = null;
            try {
                String pageUrl = baseUrl+"/"+i;
                doc = Jsoup.connect(pageUrl).get();
                System.out.println(pageUrl);
                Elements li = doc.getElementsByAttribute("data-telemetry-meta");

                for(Element el : li) {
                    PstoreGameVo pstoreGameVo = mapper.readValue(el.attr("data-telemetry-meta"), PstoreGameVo.class);
                    gameService.updateOrCreatePstoreGame(pstoreGameVo, platform, store);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
