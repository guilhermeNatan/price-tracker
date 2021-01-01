package com.price.tracker.entity;

import com.price.tracker.reuse.util.CollectionHelper;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Platform extends BaseEntity {

    private  PlatformEnum name;
    @ManyToMany
    private List<Game> games;

    public void addGame(Game game) {
        getGames().add(game);
    }

    public List<Game> getGames() {
        games= CollectionHelper.instantiateListIfNecessary(games);
        return games;
    }
}
