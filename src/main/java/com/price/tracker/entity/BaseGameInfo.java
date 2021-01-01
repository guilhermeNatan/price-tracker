package com.price.tracker.entity;

import lombok.Data;

import javax.persistence.MappedSuperclass;

@Data
@MappedSuperclass
public class BaseGameInfo extends BaseEntity {
    private String link;
}
