package com.price.tracker.entity;

import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Entity;

@Data
@Entity
public class Store extends BaseEntity {
    @Length(max = 150)
    private String name;

    @Length(max= 200)
    private String link;

}
