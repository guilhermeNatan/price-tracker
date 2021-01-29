package com.price.tracker.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.util.StringUtils;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Getter
@Setter
@Entity
public class Price extends BaseEntity{

   @NotNull
   @ManyToOne
   @JsonIgnore
   private Game game;

   @NotNull
   private Double value;

   @NotNull
   @OneToOne
   private Store store;

   public static Double convertValue(String value){
      if(StringUtils.isEmpty(value) || StringUtils.isEmpty(value.trim())) {
         return 0.0;
      }
      String formatedString = value.replace(",", ".")
              .replace("R$", "")
              .trim();
      return Double.valueOf(formatedString);
   }
}
