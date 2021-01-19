package com.price.tracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/scrab")
public class ScrabController {

    @Autowired
    private Scrab scrab;

//    @PostMapping
//    public ResponseEntity scrabPsStore(@RequestParam   String url) {
//        scrab.psStoreScrab(url);
//        return ResponseEntity.ok("Fim");
//    }


    @GetMapping
    public ResponseEntity scrabPsStore() {
        return ResponseEntity.ok("Respondendo ... ");
    }

}
