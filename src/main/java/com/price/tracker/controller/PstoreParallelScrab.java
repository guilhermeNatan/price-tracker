package com.price.tracker.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.price.tracker.factory.GameFactory;
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
    private GameFactory gameFactory;

    public PstoreParallelScrab(int startIdex, int endIndex, String baseUrl, GameFactory gameFactory) {
        this.startIdex = startIdex;
        this.endIndex = endIndex;
        this.baseUrl = baseUrl;
        this.gameFactory = gameFactory;
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
                    gameFactory.createPstoreGame(true, pstoreGameVo);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
