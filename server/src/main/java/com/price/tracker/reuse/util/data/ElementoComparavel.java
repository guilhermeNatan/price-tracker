package com.price.tracker.reuse.util.data;

import java.util.List;

/**
 *
 * <p>
 * Finalidade da Classe: Interace para comparador que utiliza listas.
 * </p>
 *
 * <p>
 * Copyright: Copyright (c) Synergia - DCC - UFMG
 * </p>
 *
 * @author tulio
 * @author ?ltima modifica??o realizada por $Author$.
 * @version $Revision$ - $LastChangedDate::                      $.
 *
 * @param <T>
 */
public interface ElementoComparavel<T extends Comparable<T>> extends
  Comparable<ElementoComparavel<T>>
{
  /**
   *
   * @return lista de elementos
   */
  List<T> getElementos();
}
