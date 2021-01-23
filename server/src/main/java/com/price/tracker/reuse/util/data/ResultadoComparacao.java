package com.price.tracker.reuse.util.data;

/**
 * <p>
 * Finalidade da Classe: Resultado de uma compara??o.
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
 */
public enum ResultadoComparacao
{
  /**
   * Os valores s?o iguais.
   */
  IGUAL(0),

  /**
   * O primeiro ? menor.
   */
  PRIMEIRO_EH_MENOR(-1),

  /**
   * O segundo ? menor.
   */
  SEGUNDO_EH_MENOR(1);

  private final int valor;

  private ResultadoComparacao(int valor)
  {
    this.valor = valor;
  }

  /**
   *
   * @param valor -1,1 ou 0
   * @return Instancia correspondente.
   */
  public static ResultadoComparacao valueOf(int valor)
  {
    switch (valor)
    {
      case 0:
        return IGUAL;
      case -1:
        return PRIMEIRO_EH_MENOR;
      case 1:
        return SEGUNDO_EH_MENOR;
      default:
        throw new IllegalArgumentException("Valor n?o previsto: " + valor);
    }
  }

  /**
   *
   * @return verdadeiro se o primeiro ? menor.
   */
  public boolean isPrimeiroMenor()
  {
    return this == PRIMEIRO_EH_MENOR;
  }

  /**
   *
   * @return verdadeiro se o segundo ? menor.
   */
  public boolean isSegundoMenor()
  {
    return this == SEGUNDO_EH_MENOR;
  }

  /**
   *
   * @return verdadeiro se as datas s?o iguais.
   */
  public boolean isIgual()
  {
    return this == IGUAL;
  }

  /**
   *
   * @return Verdadeiro se o primeiro par?metro for menor ou se os par?metros
   * forem iguais.
   */
  public boolean isPrimeiroMenorOuIgual()
  {
    return !isSegundoMenor();
  }

  /**
   * @return valor da propriedade valor
   */
  public int getValor()
  {
    return valor;
  }

  /**
   *
   * @param <T> tipo dos objetos.
   * @param o1 Objeto 1
   * @param o2 Objeto 2
   * @return ResultadoComparacao correspondente.
   */
  public static <T> ResultadoComparacao comparar(Comparable<T> o1, T o2)
  {
    return valueOf(ComparadorUtil.comparar(o1, o2));
  }

}
