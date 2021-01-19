package com.price.tracker.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.Set;

@Getter
@Setter
@Entity
public class Platform extends BaseEntity {

    private  PlatformEnum name;

     @OneToMany(mappedBy = "platform")
    private Set<GamePlatform> games;

}
