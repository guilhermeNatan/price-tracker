package com.price.tracker.service.email.builders;
import com.price.tracker.service.email.EmailPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.transaction.Transactional;

/**
 * Buider de emails .
 */
@Transactional
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRED)
public abstract class MailContentBuilder
{
  private TemplateEngine templateEngine;

  /**
   * Construtor padrão .
   *
   * @param templateEngine {@link TemplateEngine}
   */
  @Autowired
  public MailContentBuilder(TemplateEngine templateEngine)
  {
    this.templateEngine = templateEngine;
  }

  /**
   * Constroi templates de e-mails .
   *
   * @param emailPojo       Objeto simples contendo as informações do e-mail.
   * @return O conteúdo do e-mail .
   */
  public String build(EmailPojo emailPojo)
  {
    Context context = new Context();
    context.setVariable("logoeditora", "logoeditora.png");
    context.setVariable("imagemHeaderMail", "imagemHeaderMail.jpg");
    context.setVariable("twitter_icon", "twitter_icon.png");
    context.setVariable("facebook_icon", "facebook_icon.png");
    context.setVariable("instagram_icon", "instagram_icon.png");
    context = manipulateContext(context, emailPojo);
    return templateEngine.process(emailPojo.getEmailTemplateName(), context);
  }



  /**
   * Metodo para manipular o contexto de e-mail .
   * @param email objeto simples contendo informações do e-mail
   * @param context contexto Thymeleaf  .
   * @return {@link Context} .
   */
  public abstract Context manipulateContext(Context context, EmailPojo email);
}
