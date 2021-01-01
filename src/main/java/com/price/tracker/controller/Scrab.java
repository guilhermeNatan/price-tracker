package com.price.tracker.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.price.tracker.vo.PstoreGameVo;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

public class Scrab {

    private static ObjectMapper mapper = new ObjectMapper();

    private static final  String BASE_URL = "https://store.playstation.com/pt-br/category/85448d87-aa7b-4318-9997-7d25f4d275a4";
    public static void main(String[] args) throws IOException {
        new Thread( new ScrabMultiThread(1,10,BASE_URL)).start();
        new Thread(new ScrabMultiThread(11,20,BASE_URL)).start();
        new Thread(new ScrabMultiThread(21,30,BASE_URL)).start();
        new Thread(new ScrabMultiThread(31,40,BASE_URL)).start();
        new Thread(new ScrabMultiThread(41,50,BASE_URL)).start();
        new Thread(new ScrabMultiThread(51,60,BASE_URL)).start();
        new Thread(new ScrabMultiThread(61,70,BASE_URL)).start();
        new Thread(new ScrabMultiThread(71,80,BASE_URL)).start();
        new Thread(new ScrabMultiThread(81,89,BASE_URL)).start();

    }

    private static void mthread() {
        int start=0 , end =0;
        for(int i = 1 ; i < 89; i = i+10) {
            start = i; end = start+ 9;
            System.out.println(start + "" + end);
            if(i > 80) {
                ScrabMultiThread thread = new ScrabMultiThread(start,89,BASE_URL);
                new Thread(thread).start();
            }else {
                ScrabMultiThread thread = new ScrabMultiThread(start,end,BASE_URL);
                new Thread(thread).start();
                thread.run();
            }

        }
    }


}
