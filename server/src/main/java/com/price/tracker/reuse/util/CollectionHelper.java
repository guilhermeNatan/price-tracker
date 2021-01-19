package com.price.tracker.reuse.util;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class CollectionHelper {

    public static  <E> List<E> instantiateListIfNecessary(List<E> list) {
        return list != null ? list : new ArrayList<E>();
    }

    public static  <E> Set<E> instantiateSetIfNecessary(Set<E> list) {
        return list != null ? list : new HashSet<>();
    }
}
