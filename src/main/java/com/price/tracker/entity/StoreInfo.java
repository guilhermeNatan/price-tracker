package com.price.tracker.entity;

import lombok.Data;

import javax.persistence.MappedSuperclass;

@Data
@MappedSuperclass
public class StoreInfo extends BaseEntity {
    private String link;
}
