/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

package com.price.tracker.controller;

import com.price.tracker.controller.payload.SearchResponse;
import com.price.tracker.entity.Game;
import com.price.tracker.service.GameService;
import com.price.tracker.vo.GameVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Calendar;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping(Path.GAMES)
public class GameController {

    @Autowired
    private GameService gameService;

    @GetMapping(Path.GAMES_SEARCH)
    public ResponseEntity find(@RequestParam Optional<String> name,
                               @RequestParam Optional<Integer> page,
                               @RequestParam Optional<String> sortBy) {

        Page<Game> gamePage = gameService.findGameByName(name, page, sortBy);
        SearchResponse searchResponseForm = new SearchResponse();
        searchResponseForm.setPage(gamePage.getNumber() );
        searchResponseForm.setDataAtual(Calendar.getInstance());
        searchResponseForm.setTermoPesquisado(name.orElse(" "));
        searchResponseForm.getConteudo().addAll(gamePage.getContent().stream().map(game -> {
            GameVo gameVo = new GameVo();
            gameVo.setName(game.getName());
            gameVo.getPrices().addAll(game.getPrices());
            return gameVo;
        }).collect(Collectors.toList()));
        return ResponseEntity.ok(searchResponseForm);
    }
}
