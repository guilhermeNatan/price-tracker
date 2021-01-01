package com.price.tracker.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.price.tracker.vo.PstoreGameVo;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

@Data
public class ScrabMultiThread implements Runnable {
    private int startIdex;
    private int endIndex;
    private String baseUrl;
    private  ObjectMapper mapper = new ObjectMapper();

    public ScrabMultiThread(int startIdex, int endIndex, String baseUrl) {
        this.startIdex = startIdex;
        this.endIndex = endIndex;
        this.baseUrl = baseUrl;
    }


    @Override
    public void run() {
        for(int i =startIdex; i<=endIndex; i++){
            System.out.println("Page: {} " + i);
            Document doc = null;
            try {
                doc = Jsoup.connect(baseUrl+"/"+i).get();
                System.out.printf("\nWebsite Title: %s\n\n", doc.title());
                Elements li = doc.getElementsByAttribute("data-telemetry-meta");

                for(Element el : li) {
                    PstoreGameVo pstoreGameVo = mapper.readValue(el.attr("data-telemetry-meta"), PstoreGameVo.class);
                    System.out.println(pstoreGameVo);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
