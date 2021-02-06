package com.price.tracker.exception;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

/**
 * Classe responsável por manipular as exceções lançadas através das exceções lançadas
 * pelas requisições feitas à aplicação.
 * <p>
 * ControllerAdvice : Anotation que permite usar @ExceptionHandler
 */
@ControllerAdvice
public class ManipuladorExcecoes
{

  /**
   * Codigo da mensagem generica lançada quando um erro não tratado for lançado .
   */
  private static final String UNEXPECTED_ERROR = "exception.auth.unexpected";

  /**
   * Código da mensagem de acesso inválido .
   */
  private static final String EXCEPTION_CREDENCIAISINVALIDAS = "error.auth.credenciaisinvalidas";

  /**
   * Código da mensagem de acesso inválido .
   */
  private static final String EXCEPTION_ACESSO_NEGADO = "error.auth.acessoNegado";

  private final MessageSource messageSource;


  /**
   * Construtor necessário para obter uma referencia do messageSource provido pelo spring .
   *
   * @param messageSource @{MessageSource} .
   */
  @Autowired
  public ManipuladorExcecoes(MessageSource messageSource)
  {
    this.messageSource = messageSource;
  }

  /**
   * Sempre que uma exceção for lançada, este método irá interpolar a mensagem do mensages.propertes
   * e retornar uma RestMessage com a mensagem interpolada .
   *
   * @param ex     {@link RestException} .
   * @param locale {@link Locale}.
   * @return {@link RestMessage}.
   */
  @ExceptionHandler(RestException.class)
  public ResponseEntity<RestMessage> handleIllegalArgument(RestException ex, Locale locale)
  {
    String mensagemDeErro = messageSource.getMessage(ex.getMensagem(), ex.getArgumentos(), locale);
    return new ResponseEntity<>(new RestMessage(mensagemDeErro), HttpStatus.BAD_REQUEST);
  }

  /**
   * Manipula as mensagens lançadas pelas beans anotations, como por ex: @NotNull @Size .
   *
   * @param ex     {@link RestException} .
   * @param locale {@link Locale}.
   * @return {@link RestMessage}.
   */
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<RestMessage> handleArgumentNotValidException(
    MethodArgumentNotValidException ex, Locale locale)
  {
    BindingResult result = ex.getBindingResult();
    List<String> mensagensDeErro = result.getAllErrors()
      .stream()
      .map(objectError -> messageSource.getMessage(objectError, locale))
      .collect(Collectors.toList());
    return new ResponseEntity<>(new RestMessage(mensagensDeErro), HttpStatus.BAD_REQUEST);
  }

  /**
   * Manipula exceção quando há falha de autenticação.
   *
   * @param ex     {@link BadCredentialsException}.
   * @param locale Locale do arquivo de mensagens.
   * @return {@link RestMessage}.
   */
  @ExceptionHandler(BadCredentialsException.class)
  public ResponseEntity<RestMessage> handleAuthenticationException(BadCredentialsException ex,
                                                                   Locale locale)
  {
    String errorMessage = messageSource.getMessage(EXCEPTION_CREDENCIAISINVALIDAS, null, locale);
    return new ResponseEntity<>(new RestMessage(errorMessage), HttpStatus.INTERNAL_SERVER_ERROR);
  }

  /**
   * Exceção de acesso negado .
   * @param ex {@link AccessDeniedException}
   * @param locale  Locale do arquivo de mensagens.
   * @return {@link RestMessage}.
   */
  @ExceptionHandler(AccessDeniedException.class)
  public ResponseEntity<RestMessage> handleAccessDeniedException(AccessDeniedException ex,
                                                                   Locale locale)
  {
    String errorMessage = messageSource.getMessage(EXCEPTION_ACESSO_NEGADO, null, locale);
    return new ResponseEntity<>(new RestMessage(errorMessage), HttpStatus.FORBIDDEN);
  }

  /**
   * Manipular de exeção genérico quando um erro inesperado ocorre lança mensagem generíca
   * para o usuário informando que algo inesperado ocorreu no servidor .
   *
   * @param ex     Exceção lançada pelo sistema
   * @param locale Locale do arquivo de mensagens.
   * @return {@link RestMessage}.
   */
  @ExceptionHandler(Exception.class)
  public ResponseEntity<RestMessage> handleExceptions(Exception ex, Locale locale)
  {
    String errorMessage = messageSource.getMessage(UNEXPECTED_ERROR, null, locale);
    ex.printStackTrace();
    return new ResponseEntity<>(new RestMessage(errorMessage), HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
