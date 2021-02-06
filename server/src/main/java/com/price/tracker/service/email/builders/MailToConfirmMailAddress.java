/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

package com.price.tracker.service.email.builders;

import com.price.tracker.service.email.EmailPojo;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Component
public class MailToConfirmMailAddress  extends MailContentBuilder{

    /**
     * Construtor padrão .
     *
     * @param templateEngine {@link TemplateEngine}
     */
    public MailToConfirmMailAddress(TemplateEngine templateEngine) {
        super(templateEngine);
    }

    @Override
    public Context manipulateContext(Context context, EmailPojo email) {
        context.setVariable("message", email.getMessage());
        context.setVariable("recipientName", email.getRecipientName());
        return context;
    }
}
