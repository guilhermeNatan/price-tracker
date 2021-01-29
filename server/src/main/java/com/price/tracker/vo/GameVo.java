/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

package com.price.tracker.vo;

import com.price.tracker.entity.Price;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class GameVo {
    private String name;

    private List<Price> prices = new ArrayList<>();

}
