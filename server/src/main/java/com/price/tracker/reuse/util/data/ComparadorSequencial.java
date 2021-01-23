package com.price.tracker.reuse.util.data;


import com.price.tracker.reuse.util.ColecaoUtil;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

/**
 * <p>
 * Finalidade da Classe: Comparador que utiliza uma sequ?ncia de outros
 * comparadores.
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
public class ComparadorSequencial<T> implements Comparator<T>
{

  private final List<Comparator<T>> comparadores =
      new ArrayList<Comparator<T>>();

  /**
   * Construtor padr?o.
   */
  public ComparadorSequencial()
  {

  }

  /**
   *
   * @param comparadores lista inicial de comparadores.
   */
  public ComparadorSequencial(List<? extends Comparator<T>> comparadores)
  {
    if (comparadores != null)
    {
      ColecaoUtil.addAllIgnoreNull(this.comparadores, comparadores);
    }
  }


  /** {@inheritDoc} */
  public int compare(T o1, T o2)
  {
    for (Comparator<T> comparador : comparadores)
    {
      int resultado = comparador.compare(o1, o2);
      if (resultado != 0)
      {
        return resultado;
      }
    }
    return 0;
  }

  /**
   *
   * @param o1 primeiro elemento na compara??o.
   * @param o2 segundo elemento na compara??o.
   * @return {@link ResultadoComparacao}.
   */
  public ResultadoComparacao comparar(T o1, T o2)
  {
    return ResultadoComparacao.valueOf(compare(o1, o2));
  }

}
