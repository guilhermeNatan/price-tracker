package com.price.tracker.service.email;

import com.price.tracker.entity.BaseEntity;
import lombok.Getter;
import lombok.Setter;

/**
 * Objeto simples com informações do e-mail .
 */
@Getter
@Setter
public class EmailPojo
{
  private String subject;
  private String recipient;
  private String message;
  private String recipientName;
  private String emailTemplateName;
  private String recipientPhone;
  private String recipientMail;
  private BaseEntity entity;

  /**
   * Construtor padrão .
   */
  public EmailPojo()
  {
  }
  /**
   *
   * @param subject assunto
   * @param recipient cliente ou administrador do sistema a qual o e-mail será enviado
   * @param message mensagem que irá no corpo do e-mail
   * @param recipientName nome do usuário
   * @param emailTemplateName nome do xml que contêm o template do email, sem a extenção .html
   */
  public EmailPojo(String subject, String recipient, String message, String recipientName,
                   String emailTemplateName)
  {
    this.subject = subject;
    this.recipient = recipient;
    this.message = message;
    this.recipientName = recipientName;
    this.emailTemplateName = emailTemplateName;
  }


}
