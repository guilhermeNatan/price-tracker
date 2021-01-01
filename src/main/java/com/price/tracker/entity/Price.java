package com.price.tracker.entity;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Data
@Entity
public class Price extends BaseEntity{

   @NotNull
   @ManyToOne
   private Game game;

   @NotNull
   private Double value;

   @NotNull
   @OneToOne
   private Store store;
}
