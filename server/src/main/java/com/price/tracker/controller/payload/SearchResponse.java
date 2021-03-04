package com.price.tracker.controller.payload;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

/**
 * Formulario de busca para area de conhecimento e coleção.
 */
@Getter
@Setter
public class SearchResponse
{
  private int page;
  private String termoPesquisado;
  private Calendar dataAtual;
//  private List<GameVo> conteudo = new ArrayList<>();
}
