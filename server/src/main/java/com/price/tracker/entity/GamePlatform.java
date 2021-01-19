package com.price.tracker.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Getter@Setter
@Entity
public class GamePlatform extends BaseEntity{
        @ManyToOne
        @JoinColumn(name = "game_id")
        private Game game;

        @ManyToOne
        @JoinColumn(name = "platform_id")
        private Platform platform;

}
