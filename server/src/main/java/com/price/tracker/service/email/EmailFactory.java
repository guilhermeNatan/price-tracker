package com.price.tracker.service.email;


import com.price.tracker.entity.BaseEntity;
import com.price.tracker.entity.User;

/**
 * Classe responsável por criar instancias de e-mail.
 */
public class EmailFactory
{

  /**
   * @param destinatario cliente ou administrador do sistema
   * @param subject assunto
   * @param entity Entidade caso seja necessário manipular alguma informaççao
   * @param emailTemplateName nome do xml que contêm o template do email, sem a extenção .html
   * @return Email simples sem necessidade de manipular uma entidade
   */
  public static EmailPojo criarEmail(User destinatario, EmailSubject subject,
                                     String emailTemplateName, BaseEntity entity)
  {

    EmailPojo email = new EmailPojo();
    email.setSubject(subject.getDescricao());
    email.setRecipient(destinatario.getEmail());
    email.setRecipientName(destinatario.getNome());
    email.setEmailTemplateName(emailTemplateName);
    email.setEntity(entity);
    return email;
  }



  /**
   * @param destinatario cliente ou administrador do sistema
   * @param subject assunto
   * @param message mensagem que irá no corpo do e-mail
   * @param emailTemplateName nome do xml que contêm o template do email, sem a extenção .html
   * @return Email simples sem necessidade de manipular uma entidade
   */
  public static EmailPojo criarEmail(User destinatario, EmailSubject subject, String message,
                                     String emailTemplateName)
  {
    return new EmailPojo(subject.getDescricao(), destinatario.getEmail(), message,
      destinatario.getNome(), emailTemplateName);
  }

  /**
   *
   * @param destinatario cliente ou administrador do sistema
   * @param subject assunto
   * @param message mensagem que irá no corpo do e-mail
   * @param emailTemplateName nome do xml que contêm o template do email, sem a extenção .html
   * @param entity Entidade caso seja necessário manipular alguma informaççao
   * @return EmailPojo
   */
  public static EmailPojo criarEmail(User destinatario, EmailSubject subject, String message,
                                     String emailTemplateName, BaseEntity entity)
  {
    EmailPojo emailPojo = criarEmail(destinatario, subject, message, emailTemplateName);
    emailPojo.setEntity(entity);
    return emailPojo;
  }


}
