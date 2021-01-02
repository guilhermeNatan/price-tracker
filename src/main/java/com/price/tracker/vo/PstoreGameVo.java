package com.price.tracker.vo;

import com.price.tracker.entity.Price;
import lombok.Data;

@Data
public class PstoreGameVo {
    private static final String GRATUITO = "Gratuito";
    private static final String INCLUDE_PLUS = "Incluído";


    private String id;
    private Integer index;
    private String name;
    private String price;

    public boolean isAPsplusGame() {
        return INCLUDE_PLUS.equals(price);
    }
    private boolean isAFreeGame() {
        return GRATUITO.equals(price);
    }
    public Double getPrice() {
        if(isAFreeGame() || isAPsplusGame()) {
            return 0.0;
        }
        return Price.convertValue(price);
    }
}
