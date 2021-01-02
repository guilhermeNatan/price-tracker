package com.price.tracker.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Data
@Entity
public class PlaystationStoreGameInfo extends BaseGameInfo {
    private String playstationStoreId;
    private Integer playstionStoreIndex;
    private Boolean presentInPsplus;


    @NotNull
    @OneToOne
    private Game game;

}
