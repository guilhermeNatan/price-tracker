package com.price.tracker.entity;

import com.sun.istack.NotNull;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Entity;

@Data
@Entity
public class Store extends BaseEntity {

    @Length(max= 200)
    private String link;

    @NotNull
    private StoreEnum codigo;

}
