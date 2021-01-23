package com.price.tracker.exception;

import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;

import java.util.Collection;
import java.util.Map;

/**
 * Esta classe contêm alguns métodos utéis para validação .
 */
public final class Validar
{
  /**
   * Exceção lançada se um objeto não é nulo.
   * @param object Objeto .
   * @param codMensagem Mensagem
   * @param params paramentros da codMensagem .
   */
  public static void isNull(Object object, String codMensagem, Object... params)
  {
    if (object != null) {
      throw new RestException(codMensagem, params);
    }
  }

  /**
   * Exceção lançada se um objeto é nulo.
   * @param object Objeto .
   * @param codMensagem Mensagem
   * @param params paramentros da codMensagem .
   */
  public static void notNull(Object object, String codMensagem, Object... params)
  {
    if (object == null) {
      throw new RestException(codMensagem, params);
    }
  }

  /**
   * Exceção lançada se a expressão passada é falsa .
   * @param expression expressão a ser validada
   * @param codMensagem Mensagem
   * @param params paramentros da codMensagem .
   */
  public static void isTrue(boolean expression, String codMensagem, Object... params)
  {
    if (!expression) {
      throw new RestException(codMensagem, params);
    }
  }

  /**
   * Lança exceção se a expressão passada é verdadeira .
   * @param expression expressão a ser validada
   * @param codMensagem codMensagem .
   * @param params parametros da codMensagem .
   */
  public static void isFalse(boolean expression, String codMensagem, Object... params)
  {
    isTrue(!expression,codMensagem,params);
  }


  /**
   * Valida se um array de objetos esta vazio .
   * @param array array de objetos .
   * @param codMensagem codMensagem a ser lançada .
   * @param params paramentros da codMensagem .
   */
  public static void notEmpty(Object[] array, String codMensagem, Object... params)
  {
    if (ObjectUtils.isEmpty(array)) {
      throw new RestException(codMensagem, params);
    }
  }

  /**
   * Valida se uma coleção de objetos esta vazia .
   * @param collection coleção de objetos
   * @param codMensagem codMensagem a ser lançada .
   * @param parms paramentros da codMensagem .
   */
  public static void notEmpty(Collection<?> collection, String codMensagem, Object... parms)
  {
    if (CollectionUtils.isEmpty(collection)) {
      throw new RestException(codMensagem, parms);
    }
  }

  /**
   * Valida se um  map de objetos esta vazia .
   * @param map map de objetos .
   * @param codMensagem codMensagem a ser lançada .
   * @param params paramentros da codMensagem .
   */
  public static void notEmpty(Map<?, ?> map, String codMensagem, Object... params)
  {
    if (CollectionUtils.isEmpty(map)) {
      throw new RestException(codMensagem, params);
    }
  }

  /**
   * Valida se uma  string  esta vazia .
   * @param text texto .
   * @param codMensagem codMensagem a ser lançada .
   * @param args paramentros da codMensagem .
   */
  public static void notEmpty(String text, String codMensagem, Object... args)
  {
    if (text == null || "".equals(text.trim())) {
      throw new RestException(codMensagem, args);
    }
  }
}
