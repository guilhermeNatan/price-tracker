package com.price.tracker.reuse.util;

/**
 * <p>
 * Finalidade da Classe: Interface para convers?o de um objeto em outro.
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
 * @param <S>
 */
public interface IConversor<T,S>
{
  /**
   *
   * @param obj Objeto a ser transformado em string.
   * @return representa??o string do objeto.
   */
  public T converter(S obj);
}
