package com.price.tracker.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.price.tracker.reuse.util.CollectionHelper;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
public class Game extends BaseEntity {

    private String name;


    @OneToOne
    private PlaystationStoreGameInfo playstionStoreInfo;

    @OneToMany(mappedBy = "game",  fetch = FetchType.EAGER)
    private Set<GamePlatform> gamePlatforms;

    @JsonIgnore
    @OneToMany(mappedBy = "game", fetch = FetchType.EAGER)
    private List<Price> prices;

    public void addPrice(Price price) {
        getPrices().add(price);
        price.setGame(this);
    }

    public void addGamePlatform(GamePlatform gamePlatform) {
        getGamePlatforms().add(gamePlatform);
        gamePlatform.setGame(this);
    }

    public void setPlaystionStoreInfo(PlaystationStoreGameInfo playstionStoreInfo) {
        playstionStoreInfo.setGame(this);
        this.playstionStoreInfo = playstionStoreInfo;
    }

    public Set<GamePlatform> getGamePlatforms() {
        gamePlatforms = CollectionHelper.instantiateSetIfNecessary(gamePlatforms);
        return gamePlatforms;
    }

    public List<Price> getPrices() {
        prices = CollectionHelper.instantiateListIfNecessary(prices);
        return prices;
    }
}
