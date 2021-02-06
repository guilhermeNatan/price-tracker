package com.price.tracker.service.email.builders;

import com.price.tracker.service.email.EmailPojo;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

/**
 * Serviço para contruir templates  de email .
 */

@Component
public class MailContentBuilderRecoverPassword extends MailContentBuilder
{
  /**
   * Construtor padrão .
   *
   * @param templateEngine {@link TemplateEngine}
   */
  public MailContentBuilderRecoverPassword(TemplateEngine templateEngine)
  {
    super(templateEngine);
  }


  @Override
  public Context manipulateContext(Context context, EmailPojo email)
  {
    context.setVariable("message", email.getMessage());
    context.setVariable("recipientName", email.getRecipientName());
    return context;
  }


}
