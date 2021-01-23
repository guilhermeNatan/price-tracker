package com.price.tracker.reuse.util.data;

import java.util.*;

/**
 * <p>
 * Finalidade da Classe: M?todos utilit?rios para compara??es.
 * </p>
 *
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
public class ComparadorUtil
{
  /**
   * O primeiro elemento ? menor.
   */
  public static final int PRIMEIRO_MENOR = -1;

  /**
   * O segundo elemento ? menor.
   */
  public static final int SEGUNDO_MENOR = 1;

  /**
   * Os dois elementos comparados s?o iguais.
   */
  public static final int VALORES_IGUAIS = 0;

  /**
   * Comparador para o tipo {@link String}.
   */
  public static final Comparator<String> COMPARADOR_STRING =
      obterComparador(String.class);

  /**
   * Comparador para o tipo {@link Long}.
   */
  public static final Comparator<Long> COMPARADOR_LONG =
      obterComparador(Long.class);

  /**
   *
   * @see Comparable#compareTo(Object)
   * @param <T> Tipo parametrizado.
   * @param valor1 Valor 1
   * @param valor2 valor 2
   * @return resultado da compara??o.
   */
  public static <T> int comparar(Comparable<T> valor1, T valor2)
  {

    if (valor1 == null)
    {
      return (valor2 != null) ? SEGUNDO_MENOR : VALORES_IGUAIS;
    } else if (valor2 == null)
    {
      return PRIMEIRO_MENOR;
    } else
    {
      return valor1.compareTo(valor2);
    }
  }

  /**
   * @param <T> tipo
   * @param valor1 valo1
   * @param valor2 valor2
   * @return verdadeiro se o primeiro ? menor.
   */
  public static <T> boolean primeiroEhMenor(Comparable<T> valor1, T valor2)
  {
    return comparar(valor1, valor2) == PRIMEIRO_MENOR;
  }

  /**
   * @param <T> tipo
   * @param valor1 valo1
   * @param valor2 valor2
   * @return verdadeiro se o primeiro ? menor.
   */
  public static <T> boolean primeiroEhMaior(Comparable<T> valor1, T valor2)
  {
    return comparar(valor1, valor2) == SEGUNDO_MENOR;
  }


  /**
   *
   * @param <T> tipo dos objetos a serem comparados.
   * @param valor1 primeiro valor a comparar.
   * @param valor2 segundo valor a comparar
   * @return O maior valor. Nulo apenas se ambos forem nulos.
   */
  public static <T extends Comparable<T>> T obterMaior(T valor1, T valor2)
  {
    boolean inverter = true;
    return obterMelhor(valor1, valor2, inverter);
  }

  /**
   *
   * @param <T> tipo dos objetos a serem comparados.
   * @param valor1 primeiro valor a comparar.
   * @param valor2 segundo valor a comparar
   * @return O maior valor. Nulo apenas se ambos forem nulos.
   */
  public static <T extends Comparable<T>> T obterMenor(T valor1, T valor2)
  {
    boolean inverter = false;
    return obterMelhor(valor1, valor2, inverter);
  }

  /**
   *
   * @param <T> tipo dos objetos a serem comparados.
   * @param valor1 primeiro valor a comparar.
   * @param valor2 segundo valor a comparar
   * @return O maior valor. Nulo apenas se ambos forem nulos.
   */
  private static <T extends Comparable<T>> T obterMelhor(T valor1, T valor2,
    boolean inverter)
  {
    if (valor2 == null)
    {
      return valor1;
    } else if (valor1 == null)
    {
      return valor2;
    } else
    {
      switch (valor1.compareTo(valor2) * (inverter ? -1 : 1))
      {
        case SEGUNDO_MENOR:
          return valor2;

        case PRIMEIRO_MENOR:
          return valor1;

        default:
          return valor1;
      }
    }
  }

  /**
   *
   * @param esperado Valor esperado para o objeto.
   * @param obtido Valor obtido para o objeto.
   */
  public static void validarIgualdade(Object esperado, Object obtido)
  {
    if (!Objects.equals(esperado, obtido))
    {
      throw new IllegalArgumentException("Objetos diferem. Esperado: "
        + esperado + "\nObtido: " + obtido);
    }
  }

  /**
   *
   * @param objetos objetos testados
   * @return verdadeiro se nenhum dos objetos ? nulo
   */
  public static boolean nenhumEhNulo(Object... objetos)
  {
    boolean nenhumNulo;
    if (objetos != null)
    {
      nenhumNulo = true;
      for (Object objeto : objetos)
      {
        if (objeto == null)
        {
          nenhumNulo = false;
          break;
        }
      }
    } else
    {
      // Foi passado como argumento um array nulo (nenhumNulo((Object[]) null))
      nenhumNulo = false;
    }
    return nenhumNulo;
  }

  /**
   *
   * @param objeto Valor esperado para o objeto.
   *
   */
  public static void validarNulo(Object objeto)
  {
    validarIgualdade(null, objeto);
  }

  /**
   *
   * @param <T> Tipo compar?vel.
   * @param classe Classe para o comparador.
   * @return Comparador.
   */
  public static <T extends Comparable<T>> Comparator<T> obterComparador(
    Class<T> classe)
  {
    return new Comparator<T>()
    {
      public int compare(T o1, T o2)
      {
        return comparar(o1, o2);
      }

    };
  }

  /**
   * @param <T> tipo do comparador
   * @param comparador comparador original.
   * @return comparador inverso.
   */
  public static <T> Comparator<T> inverter(
    final Comparator<T> comparador)
  {
    return new Comparator<T>()
    {
      public int compare(T o1, T o2)
      {
        return (-1) * comparador.compare(o1, o2);
      }
    };
  }

  /**
   * @param <T> tipo do comparador
   * @param comparador comparador original.
   * @return comparador inverso para valores n?o nulos e que retorna valores
   * nulos como piores.
   */
  public static <T> Comparator<T> inverterNullsLast(Comparator<T> comparador)
  {
    return obterComparadorNullsLast(inverter(comparador));
  }

  /**
   *
   * @param <T> tipo do comparador
   * @param comparador comparador original.
   * @return A partir do comparador passado como par?metro, obt?m um novo
   * comparador que lida com n?meros nulos fazendo com que eles sejam
   * considerados os ?ltimos valores.
   */
  public static <T> Comparator<T> obterComparadorNullsLast(
    final Comparator<T> comparador)
  {
    return new Comparator<T>()
    {
      public int compare(T o1, T o2)
      {
        int resultado = compararNulidadesNullsLast(o1, o2);
        if(resultado == 0 && o1 != null)
        {
          resultado = comparador.compare(o1, o2);
        }
        return resultado;
      }
    };

  }

  /**
   * Compara a nulidade de dois objetos de forma se apenas um deles n?o for
   * nulo, ele vem primeiro.
   *
   * @param o1 Objeto 1
   * @param o2 Objeto 2
   * @return resultado da comprara??o.
   */
  public static int compararNulidadesNullsLast(Object o1,Object o2)
  {
    if (o1 == null)
    {
      return o2 == null ? 0 : 1;
    } else if (o2 == null)
    {
      return -1;
    }
    return 0;
  }

  /**
   *
   * @param <T> tipo
   * @param itens itens do comparador
   * @return ElementoComparavel.
   */
  public static <T extends Comparable<T>> ElementoComparavel<T> obterElementoComparavel(T... itens)
  {
    return new ElementoComparavelImpl<T>(itens);
  }

  static class ElementoComparavelImpl<T extends Comparable<T>> implements
    ElementoComparavel<T>
  {
    private List<T> elementos = new ArrayList<T>();

    ElementoComparavelImpl(T... elmnts)
    {
      elementos.addAll(Arrays.asList(elmnts));
    }

    /** {@inheritDoc} */
    public int compareTo(ElementoComparavel<T> o)
    {
      Iterator<T> iteradorThis = this.elementos.iterator();
      Iterator<T> iteradorO = o.getElementos().iterator();

      int resultado = 0;
      while (iteradorThis.hasNext() && iteradorO.hasNext())
      {
        T c1 = iteradorThis.next();
        T c2 = iteradorO.next();

        resultado = c1.compareTo(c2);
        if (resultado != 0)
        {
          return resultado;
        }
      }

      if (iteradorThis.hasNext() && !iteradorO.hasNext())
      {
        return ComparadorUtil.SEGUNDO_MENOR;
      } else if (!iteradorThis.hasNext() && iteradorO.hasNext())
      {
        return ComparadorUtil.PRIMEIRO_MENOR;
      }

      return ComparadorUtil.VALORES_IGUAIS;
    }

    /** {@inheritDoc} */
    public List<T> getElementos()
    {
      return elementos;
    }

  }

}
