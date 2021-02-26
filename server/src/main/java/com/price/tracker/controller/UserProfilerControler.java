/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

package com.price.tracker.controller;

import com.price.tracker.controller.payload.UserSummary;
import com.price.tracker.security.CurrentUser;
import com.price.tracker.security.UserPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Path.UserProfiler.USER_DATA)
public class UserProfilerControler {


    @GetMapping(Path.UserProfiler.USER_ME)
    public UserSummary getCurrentUser(@CurrentUser UserPrincipal currentUser)
    {
        UserSummary userSummary = new UserSummary(currentUser.getId(), currentUser.getUsername(),
                currentUser.getName(),currentUser.getEmail(),currentUser.getAuthorities());
        return userSummary;
    }
}
