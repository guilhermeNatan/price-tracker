package com.price.tracker.service.email;

import com.price.tracker.service.email.builders.MailContentBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.mail.MessagingException;
import javax.transaction.Transactional;

/**
 * Serviço para envio de e-mail .
 */
@Transactional
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRED)
@Component
public class EmailService
{

  private static final String PATH_LOGO = "imagens/logoeditora.png";
  private static final String PATH_IMAGE_HEADER = "imagens/imagemHeaderMail.jpg";
  private static final String PATH_IMAGE_TWITTER = "imagens/twitter_icon.png";
  private static final String PATH_IMAGE_FACEBOOK = "imagens/facebook_icon.png";
  private static final String PATH_IMAGE_INSTAGRAM = "imagens/instagram_icon.png";
  private static final String MIME_JPG = "image/jpg";
  private static final String MIME_PNG = "image/png";

  @Autowired
  private JavaMailSender mailSender;


  /**
   *  Envial um e-mail .
   * @param email Objeto contendo informações basicas do e-mail
   * @param mailContentBuilder Builder para o e-mail
   */
  @Async
  public  void  prepareAndSendSimpleMail(EmailPojo email, MailContentBuilder mailContentBuilder)
  {
    MimeMessagePreparator messagePreparator = mimeMessage -> {
      MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true);
      messageHelper.setTo(email.getRecipient());
      messageHelper.setSubject(email.getSubject());
      String content = mailContentBuilder.build(email);
      messageHelper.setText(content, true);
      addImagesFooterAndHeader(messageHelper);
    };
    mailSender.send(messagePreparator);
  }


  private   void  addImagesFooterAndHeader(MimeMessageHelper messageHelper )
    throws MessagingException
  {
    messageHelper.addInline("logoeditora.png", new ClassPathResource(PATH_LOGO), MIME_PNG);
    messageHelper.addInline("imagemHeaderMail.jpg", new ClassPathResource(PATH_IMAGE_HEADER),
      MIME_JPG);
    messageHelper.addInline("twitter_icon.png", new ClassPathResource(PATH_IMAGE_TWITTER),
      MIME_PNG);
    messageHelper.addInline("facebook_icon.png", new ClassPathResource(PATH_IMAGE_FACEBOOK),
      MIME_PNG);
    messageHelper.addInline("instagram_icon.png", new ClassPathResource(PATH_IMAGE_INSTAGRAM),
      MIME_PNG);
  }


}
