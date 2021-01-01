package com.price.tracker.entity;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Data
@Entity
public class PlaystationStoreInfo extends StoreInfo {
    private String playstationStoreId;
    private Integer playstionStoreIndex;

    @NotNull
    @OneToOne
    private Game game;

}
