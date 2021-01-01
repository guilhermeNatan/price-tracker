package com.price.tracker.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
public enum PlatformEnum {
    PLAYSTATION_4("Playstation 4"),
    PLAYSTATION_5("Playstation 5");

    @Getter
    @Setter
    private String descricao;
}
