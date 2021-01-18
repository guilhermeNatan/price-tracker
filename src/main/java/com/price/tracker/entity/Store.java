package com.price.tracker.entity;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Entity;

@Getter
@Setter
@Entity
public class Store extends BaseEntity {

    @Length(max= 200)
    private String link;

    @NotNull
    private StoreEnum codigo;

}
