package com.price.tracker.reuse.util;

import java.util.*;
import java.util.stream.Collectors;

/**
 * <p>
 * Finalidade da Classe: M�todos de re�so para cole��es.
 * </p>
 *
 * <p>
 * Copyright: Copyright (c) Synergia - DCC - UFMG
 * </p>
 *
 */
public class ColecaoUtil
{

  /**
   * Forma de uso: <code>
   * List a;
   * List&lt;Entidade&gt; b = ColecaoUtilPortal.cast(a);
   * </code>.
   *
   * @param <T>     Tipo parametrizado da cole��o.
   * @param colecao Lista
   * @return lista parametrizada se a lista puder ser convertida. Caso contr�rio
   * lan�a uma ClassCastException.
   */
  public static <T> List<T> cast(List colecao)
  {
    return colecao;
  }

  /**
   * Forma de uso: <code>
   * List a;
   * List&lt;Entidade&gt; b = ColecaoUtilPortal.cast(a);
   * </code>.
   *
   * @param <T>     Tipo parametrizado da cole��o.
   * @param tipo    classe do tipo da cole��o
   * @param colecao Cole��o
   * @return Cole��o parametrizada
   */
  public static <T> Collection<T> cast(Class<T> tipo, Collection colecao)
  {
    return colecao;
  }

  /**
   * @param <T>     parametrizacao da cole��o.
   * @param colecao Cole��o a ser iniciada;
   * @return A mesma cole��o se n�o for nula ou uma nova cole��o.
   */
  public static <T> Collection<T> iniciarColecaoSeNecessario(
    Collection<T> colecao)
  {
    return colecao != null ? colecao : new TreeSet<T>();
  }

  /**
   * Retorna o primeiro objeto da coleção.
   * @param colecao Lista de objetos.
   * @param <T> Tipo de Objeto a ser retornado.
   * @return Objeto.
   */
  public static <T> T obterPrimeiroElemento(Collection<T> colecao)
  {
    return  colecao != null && !colecao.isEmpty() ? colecao.iterator().next(): null;
  }

  /**
   * @param <T>    tipo da cole��o.
   * @param classe classe. N�o � usado, mas permite definir a classe da cole��o
   *               em certas situa��es.
   * @return classe da cole��o.
   */
  public static <T> Collection<T> obterColecaoVazia(Class<T> classe)
  {
    return Collections.emptyList();
  }

  /**
   * @param <T>     parametrizacao da cole��o.
   * @param colecao Cole��o a ser iniciada;
   * @return A mesma cole��o se n�o for nula ou uma nova cole��o.
   */
  public static <T> SortedSet<T> iniciarSortedSetSeNecessario(
    SortedSet<T> colecao)
  {
    return colecao != null ? colecao : new TreeSet<T>();
  }

  /**
   * @param <T>     parametrizacao da cole��o.
   * @param colecao Cole��o a ser iniciada;
   * @return A mesma cole��o se n�o for nula ou uma nova cole��o.
   */
  public static <T> Set<T> iniciarSetSeNecessario(Set<T> colecao)
  {
    return colecao != null ? colecao : new TreeSet<T>();
  }

  /**
   * @param <T>     parametrizacao da cole��o.
   * @param colecao Cole��o a ser iniciada;
   * @return A mesma cole��o se n�o for nula ou uma nova cole��o.
   */
  public static <T> List<T> iniciarListSeNecessario(List<T> colecao)
  {
    return colecao != null ? colecao : new ArrayList<T>();
  }

  /**
   * @param colecao cole��o a ser iniciada.
   * @param <T>     parametrizacao da cole��o.
   * @return A mesma cole��o se n�o for nula ou uma nova cole��o.
   */
  public static <T> Collection<T> iniciarColecaoEntidade(Collection<T> colecao)
  {
    return colecao != null ? colecao : new ArrayList<>(1);
  }

  /**
   * @param <T> T
   * @param l   l
   * @return l ou uma lista vazia.
   */
  public static <T> List<T> obterPadraoSeNulo(List<T> l)
  {
    return l != null ? l : new ArrayList<>();
  }

  /**
   * @param <T>           Tipo de origem dos elementos
   * @param <E>           Tipo de destino
   * @param <F>           tipo da coleção
   * @param colecaoOrigem coleção origem dos elementos.
   * @param conversor     conversor do tipo da coleção original para o tipo da
   *                      coleção destino
   * @return coleção com os elementos convertidos.
   */
  public static <T, E, F extends T> List<E> converterParaLista(Collection<F> colecaoOrigem,
                                                               IConversor<E, T> conversor)
  {
    List<E> colecaoDestino = new ArrayList<E>(colecaoOrigem.size());
    copiarElementos(colecaoOrigem, colecaoDestino, conversor);
    return colecaoDestino;
  }

  /**
   * @param <T>            Tipo de origem dos elementos
   * @param <E>            Tipo de destino
   * @param <F>            Tipo de origem
   * @param <C>            Tipo de coleção
   * @param colecaoOrigem  coleção origem dos elementos.
   * @param colecaoDestino coleção para onde os elementos são copiados.
   * @param conversor      conversor do tipo da coleção original para o tipo da
   *                       coleção destino
   * @return o parâmetro colecaoDestino
   */
  public static <T, E, F extends T, C extends Collection<E>> C copiarElementos(
    Collection<F> colecaoOrigem, C colecaoDestino,
    IConversor<E, T> conversor)
  {
    for (T elementoOrigem : colecaoOrigem) {
      colecaoDestino.add(conversor.converter(elementoOrigem));
    }

    return colecaoDestino;
  }


  /**
   * @param <T>            Par�metro da cole��o.
   * @param colecaoAtestar Cole��o a testar.
   * @param elementos      Elementos a testar na cole��o.
   * @return verdadeiro se a primeira cole��o contem algum elemento da segunda.
   */
  public static <T> boolean contemAlgum(Collection<? extends T> colecaoAtestar,
                                        Iterable<? extends T> elementos)
  {
    for (T e : elementos) {
      if (colecaoAtestar.contains(e)) {
        return true;
      }
    }
    return false;
  }

  /**
   * @param <T> tipo
   * @param c1  cole��o 1
   * @param c2  cole��o 2
   * @return resultado.
   */
  public static <T> Set<T> intersecao(Collection<? extends T> c1, Set<? extends T> c2)
  {
    Set<T> resultado = new LinkedHashSet<T>();
    for (T item : c1) {
      if (c2.contains(item)) {
        resultado.add(item);
      }
    }
    return resultado;
  }


  /**
   * Transforma uma coleção em string .
   *
   * @param colecao   colecao.
   * @param separador separador que deverá ser usado .
   * @param <T>       Objeto
   * @return String onde os elementos da coleção estão concatenados .
   */
  public static <T> String transformarColecaoString(Collection<T> colecao, String separador)
  {
    return colecao.stream().map(T::toString).collect(Collectors.joining(separador));
  }

  /**
   * Obtem a diferen�a entre dua cole��es.
   *
   * @param <T> tipo
   * @param c1  cole��o 1
   * @param c2  cole��o 2
   * @return Cole��o com os items diferentes.
   */
  public static <T> Set<T> diferenca(Collection<? extends T> c1, Collection<? extends T> c2)
  {
    Set<T> resultado = new LinkedHashSet<>();
    for (T item : c1) {
      if (!c2.contains(item)) {
        resultado.add(item);
      }
    }
    return resultado;
  }

  /**
   * @param <K> Tipo mapa.
   * @param <V> Tipo mapa.
   * @return mapa criado.
   */
  public static <K, V> MapBuilder<K, V> criarMapa()
  {
    return criarMapa(new HashMap<>());
  }

  /**
   * @param instancia inst�ncia do mapa.
   * @param <K>       Tipo mapa.
   * @param <V>       Tipo mapa.
   * @return mapa criado.
   */
  public static <K, V> MapBuilder<K, V> criarMapa(Map<K, V> instancia)
  {
    return new MapBuilder<>(instancia);
  }


  /**
   * @param <K> tipo mapa.
   * @param <V> tipo mapa.
   */
  public static class MapBuilder<K, V>
  {
    private final Map<K, V> mapa;

    /**
     * @param mapa mapa.
     */
    public MapBuilder(Map<K, V> mapa)
    {
      this.mapa = mapa;
    }

    /**
     * @param key   chave no mapa.
     * @param value valor mapa.
     * @return mapa.
     */
    public MapBuilder<K, V> put(K key, Optional<V> value)
    {
      value.ifPresent((v) -> mapa.put(key, v));
      return this;
    }

    /**
     * @param key   chave no mapa.
     * @param value valor mapa.
     * @return mapa.
     */
    public MapBuilder<K, V> put(K key, V value)
    {
      mapa.put(key, value);
      return this;
    }

    /**
     * @return mapa.
     */
    public Map<K, V> build()
    {
      return mapa;
    }
  }
  /**
   * Adiciona a uma coleção os elementos não nulos provenientes de outra
   * coleção.
   *
   * @param <C>            tipo da coleção destino.
   * @param <T>            tipo dos elementos da coleção destino.
   * @param <E>            tipo da coleção fonte.
   * @param colecaoDestino Coleção à qual os elementos serão adicionados.
   * @param colecaoFonte   Coleção da qual os elementos serão recuperados.
   * @return colecaoDestino.
   */
  public static <C extends Collection<T>, T, E extends T> C addAllIgnoreNull(
    C colecaoDestino, Collection<E> colecaoFonte)
  {
    if (colecaoFonte != null) {
      for (E elemento : colecaoFonte) {
        addIgnoreNull(colecaoDestino, elemento);
      }
    }
    return colecaoDestino;
  }

  /**
   * @param colecao  Coleção
   * @param elemento elemento a ser adicionado se não for nulo.
   * @return verdadeiro se adicionou o elemento.
   */
  public static boolean addIgnoreNull(Collection colecao, Object elemento)
  {
    if (elemento != null) {
      return colecao.add(elemento);
    } else {
      return false;
    }
  }
}

