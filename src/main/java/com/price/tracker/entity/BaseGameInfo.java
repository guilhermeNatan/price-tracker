package com.price.tracker.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.MappedSuperclass;

@Getter
@Setter
@MappedSuperclass
public class BaseGameInfo extends BaseEntity {
    private String link;
}
