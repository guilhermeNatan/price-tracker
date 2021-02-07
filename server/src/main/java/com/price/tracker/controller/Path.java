/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

package com.price.tracker.controller;

public interface Path {
    String BASE_PATH = "/api/";
    String PUBLIC_PATH = BASE_PATH + "public/";

    String GAMES = PUBLIC_PATH + "games";
    String GAMES_SEARCH = "/search";
    String GAME_DETAIL = "/detail";

    interface  Auth {
        String AUTH = Path.PUBLIC_PATH   + "auth";
        String SIGNIN =  "/signin";
        String SIGNUP  =  "/signup";
        String FORGOTPASSWORD  =  "/forgotpassword";
        String RESETPASSWORD  =  "/resetpassword";
        String VALIDATE_EMAIL_ADDRESS =  "/validate-email-address";
    }
}
