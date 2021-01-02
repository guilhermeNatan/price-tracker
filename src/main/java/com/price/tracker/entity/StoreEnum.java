package com.price.tracker.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@AllArgsConstructor
public enum StoreEnum {
    PLAYSTATION_STORE("Playstation Store", 1);
    @Getter
    @Setter
    private String descricao;
    @Getter
    @Setter
    private Integer codigo;
}
