package com.price.tracker.entity;

import com.price.tracker.reuse.util.CollectionHelper;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Game extends BaseEntity {

    private String name;

    @OneToOne(mappedBy = "game")
    private PlaystationStoreGameInfo playstionStoreInfo;

    @ManyToMany
    @JoinTable(
            name = "game_platform",
            joinColumns = @JoinColumn(name = "game_id"),
            inverseJoinColumns = @JoinColumn(name = "platform_id"))
    private List<Platform> platforms;

    @OneToMany(mappedBy = "game")
    private List<Price> prices;

    public void addPrice(Price price) {
        getPrices().add(price);
        price.setGame(this);
    }

    public void addPlatform(Platform platform) {
        getPlatforms().add(platform);
        platform.addGame(this);
    }

    public void setPlaystionStoreInfo(PlaystationStoreGameInfo playstionStoreInfo) {
        playstionStoreInfo.setGame(this);
        this.playstionStoreInfo = playstionStoreInfo;
    }

    public List<Platform> getPlatforms() {
        platforms = CollectionHelper.instantiateListIfNecessary(platforms);
        return platforms;
    }

    public List<Price> getPrices() {
        prices = CollectionHelper.instantiateListIfNecessary(prices);
        return prices;
    }
}
