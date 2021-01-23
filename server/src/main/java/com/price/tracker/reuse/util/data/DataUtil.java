package com.price.tracker.reuse.util.data;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/***
 *
 * <p> Finalidade da Classe: gerenciar datas</p>
 *
 * <p>Possui métodos gerais para gerenciar datas, como um conversor data-string.</p>
 *
 * <p> Copyright: Copyright (c) Synergia - DCC - UFMG </p>
 *
 * @author Última modificação realizada por $Author$.
 * @version $Revision$ - $LastChangedDate::                      $.
 *
 */
public class DataUtil
{
  private static final ComparadorSequencial<Calendar> COMPARADOR_DATAS =
    new ComparadorSequencial<>(Arrays.asList(new ComparadorCampoData(
        Calendar.YEAR), new ComparadorCampoData(Calendar.MONTH),
      new ComparadorCampoData(Calendar.DAY_OF_MONTH)));

  /**
   *
   */
  private static final String FORMATO_DATA = "dd/MM/yyyy";

  /**
   *
   */
  private static final String FORMATO_HORA = "HH:mm";

  private static final String ESPACO = " ";
  /**
   *
   */
  private static final String FORMATO_DATA_HORA = FORMATO_DATA + ESPACO + FORMATO_HORA;

  /**
   * Transforma uma string no formato dd/MM/yyyy em uma data.
   *
   * @param str String no formato dd/MM/yyyy.
   * @return data convertida.
   */
  public static Calendar stringParaData(String str)
  {
    String[] camposData = str.split("/");
    GregorianCalendar data = new GregorianCalendar(Integer.parseInt(camposData[2]),
      Integer.parseInt(camposData[1]) - 1, Integer.parseInt(camposData[0]));
    return data;
  }

  /**
   * @param data Data a ser comparada.
   * @return True se a data atual for maior ou igual ao dia de hoje.
   */
  public static boolean compararDataMaiorIgualDataAtual(Calendar data)
  {
    Calendar dataAtual = DataUtil.getDataAtual();
    return DataUtil.compararDatasCalendario(data,dataAtual) ==
      ResultadoComparacao.SEGUNDO_EH_MENOR ||
      DataUtil.compararDatasCalendario(data,dataAtual) ==
        ResultadoComparacao.IGUAL;
  }


  /**
   * Compara duas datas e retorna verdadeiro caso a primeira seja ANTERIOR a segunda data .
   * @param primeiro Data a ser comparada.
   * @param segundo Data a ser comparada.
   * @return Verdadeiro se primeiro é uma data anterior a data passada como segundo .
   */
  public static boolean compararDataPrimeiroAnteriorSegundo(Calendar primeiro , Calendar segundo)
  {
    return DataUtil.compararDatasCalendario(primeiro,segundo) ==
      ResultadoComparacao.PRIMEIRO_EH_MENOR ||
      DataUtil.compararDatasCalendario(primeiro,segundo) ==
        ResultadoComparacao.IGUAL;
  }

  /**
   * Compara duas datas e retorna verdadeiro caso a primeira seja POSTERIOR a segunda data .
   * @param primeiro Data a ser comparada.
   * @param segundo Data a ser comparada.
   * @return Verdadeiro se primeiro é uma data posterior a data passada como segundo .
   */
  public static boolean compararDataPrimeiroPosteriorSegundo(Calendar primeiro , Calendar segundo)
  {
    return DataUtil.compararDatasCalendario(primeiro,segundo) ==
      ResultadoComparacao.SEGUNDO_EH_MENOR ||
      DataUtil.compararDatasCalendario(primeiro,segundo) ==
        ResultadoComparacao.IGUAL;
  }
  /**
   * Transforma uma string no formato dd/MM/yyyy HH:mm em uma data.
   *
   * @param string String no formato dd/MM/yyyy HH:mm
   * @return data convertida.
   * @throws ParseException .
   */
  public static Calendar stringParaDataHora(String string)
    throws ParseException
  {
    Calendar calendar = Calendar.getInstance();
    calendar.setTime(getFormatoDataHora().parse(string));
    return calendar;
  }

  /**
   * Transforma uma data em uma string no formato dd/MM/yyyy.
   *
   * @param data Data a ser convertida.
   * @return string no formato dd/MM/yyyy.
   */
  public static String dataParaString(Calendar data)
  {
    return getStringData(data);
  }

  /**
   * @return Data atual .
   */
  public static Calendar getDataAtual()
  {
    Calendar calendar = Calendar.getInstance();
    calendar.setTime(new Date());
    return calendar;
  }

  /**
   * Acrescenta ou decrescenta o número de dias de uma data.
   *
   * @param data que terá o número de dias somados.
   * @param dias numero de dias para somar.
   * @return Nova data em string.
   */
  public static String addDias(Calendar data, int dias)
  {
    data.add(Calendar.DATE, dias);
    return dataParaString(data);
  }

  /**
   * Acrescenta ou decrescenta o número de dias da data atual.
   *
   * @param dias numero de dias para somar
   * @return Nova data em string
   */
  public static String addDias(int dias)
  {
    return addDias(getDataAtual(), dias);
  }

  /**
   * Acrescenta ou decrescenta o número de dias de uma data no formato de string.
   *
   * @param data no formato string que terá o número de dias somados.
   * @param dias numero de dias para somar.
   * @return Nova data em string.
   */
  public static String addDias(String data, int dias)
  {
    return addDias(stringParaData(data), dias);
  }

  /**
   * Acrescenta ou decrescenta o número de meses de uma data.
   *
   * @param data  que terá o número de meses somados.
   * @param meses numero de meses para somar.
   * @return Nova data em string.
   */
  public static String addMeses(Calendar data, int meses)
  {
    data.add(Calendar.MONTH, meses);
    return dataParaString(data);
  }

  /**
   * Acrescenta ou decrescenta o número de meses da data atual.
   *
   * @param meses numero de meses para somar
   * @return Nova data em string
   */
  public static String addMeses(int meses)
  {
    return addMeses(getDataAtual(), meses);
  }

  /**
   * Acrescenta ou decrescenta o número de meses de uma data no formato de string.
   *
   * @param data  no formato string que terá o número de meses somados.
   * @param meses numero de meses para somar.
   * @return Nova data em string.
   */
  public static String addMeses(String data, int meses)
  {
    return addMeses(stringParaData(data), meses);
  }

  /**
   * Acrescenta ou decrescenta o número de anos de uma data.
   *
   * @param data que terá o número de anos somados.
   * @param anos numero de anos para somar.
   * @return Nova data em string.
   */
  public static String addAnos(Calendar data, int anos)
  {
    data.add(Calendar.YEAR, anos);
    return dataParaString(data);
  }

  /**
   * Acrescenta ou decrescenta o número de anos da data atual.
   *
   * @param anos numero de anos para somar
   * @return Nova data em string
   */
  public static String addAnos(int anos)
  {
    return addAnos(getDataAtual(), anos);
  }

  /**
   * Acrescenta ou decrescenta o número de anos de uma data no formato de string.
   *
   * @param data no formato string que terá o número de anos somados.
   * @param anos numero de anos para somar.
   * @return Nova data em string.
   */
  public static String addAnos(String data, int anos)
  {
    return addAnos(stringParaData(data), anos);
  }

  /**
   * Este método retorna a data corrente no formato HH:mm.
   *
   * @param dataHoraCorrente data e hora.
   * @return uma string representando a hora HH:mm
   */
  public static String getStringDataHora(Calendar dataHoraCorrente)
  {
    return getStringData(dataHoraCorrente) + ESPACO
      + getStringHora(dataHoraCorrente);
  }

  /**
   * Este método retorna a data corrente no formato dd/MM/yyyy.
   *
   * @param dataHoraCorrente data e hora atual do sistema.
   * @return uma string representando a data atual do sistema no formato
   * dd/MM/yyyy
   */
  public static String getStringData(Calendar dataHoraCorrente)
  {
    return getDataHoraFormatado(dataHoraCorrente, getFormatoData());
  }

  private static SimpleDateFormat getFormatoHora()
  {
    return new SimpleDateFormat(FORMATO_HORA);
  }

  private static SimpleDateFormat getFormatoData()
  {
    return new SimpleDateFormat(FORMATO_DATA);
  }

  private static SimpleDateFormat getFormatoDataHora()
  {
    return new SimpleDateFormat(FORMATO_DATA_HORA);
  }

  private static String getDataHoraFormatado(Calendar dataHora,
                                             DateFormat formato)
  {
    String dataHoraString = "";
    if (dataHora != null) {
      dataHoraString = formato.format(dataHora.getTime());
    }
    return dataHoraString;
  }

  /**
   * Este método retorna a data corrente no formato HH:mm.
   *
   * @param dataHoraCorrente data e hora.
   * @return uma string representando a hora HH:mm
   */
  public static String getStringHora(Calendar dataHoraCorrente)
  {
    return getDataHoraFormatado(dataHoraCorrente, getFormatoHora());
  }

  /**
   * @param dataHora Calendar .
   * @return Descrição de um mês .
   */
  public static String getMesExtenso(Calendar dataHora)
  {
    switch (dataHora.get(Calendar.MONTH)) {
      case Calendar.JANUARY:
        return "Janeiro";
      case Calendar.FEBRUARY:
        return "Fevereiro";
      case Calendar.MARCH:
        return "Março";
      case Calendar.APRIL:
        return "Abril";
      case Calendar.MAY:
        return "Maio";
      case Calendar.JUNE:
        return "Junho";
      case Calendar.JULY:
        return "Julho";
      case Calendar.AUGUST:
        return "Agosto";
      case Calendar.SEPTEMBER:
        return "Setembro";
      case Calendar.OCTOBER:
        return "Outubro";
      case Calendar.NOVEMBER:
        return "Novembro";
      case Calendar.DECEMBER:
        return "Dezembro";
      default:
        return null;
    }
  }

  /**
   * @param dataAtual Data atual .
   * @return Ano em inteiro.
   */
  public static int getAno(Calendar dataAtual)
  {
    return dataAtual.get(Calendar.YEAR);
  }

  /**
   * @param dataAtual Data atual .
   * @return Mês em inteiro .
   */
  public static int getMes(Calendar dataAtual)
  {
    return dataAtual.get(Calendar.MONTH) + 1;
  }

  /**
   * @return Dia de hoje começando com a hora 00:00:00
   */
  public static Calendar getDataAtualMeiaNoite()
  {
    Calendar date = new GregorianCalendar();
    date.set(Calendar.HOUR_OF_DAY, 0);
    date.set(Calendar.MINUTE, 0);
    date.set(Calendar.SECOND, 0);
    date.set(Calendar.MILLISECOND, 0);
    return date;
  }

  /**
   * Compara 2 datas considerando apenas ano, mês e dia.
   *
   * @param data1 {@link Calendar}
   * @param data2 {@link Calendar}
   * @return -1, 0 ou 1.
   */
  public static ResultadoComparacao compararDatasCalendario(Calendar data1,
                                                            Calendar data2)
  {
    return ResultadoComparacao.valueOf(COMPARADOR_DATAS.compare(data1, data2));
  }

  static class ComparadorCampoData implements Comparator<Calendar>
  {
    private final int campoData;

    ComparadorCampoData(int campo)
    {
      this.campoData = campo;
    }

    /** {@inheritDoc} */
    public int compare(Calendar o1, Calendar o2)
    {
      return Integer.compare(o1.get(campoData), o2.get(campoData));
    }
  }
}
