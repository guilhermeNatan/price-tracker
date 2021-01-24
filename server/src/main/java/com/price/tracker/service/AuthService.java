package com.price.tracker.service;

import com.price.tracker.controller.payload.ForgotPassword;
import com.price.tracker.controller.payload.ResetPassword;
import com.price.tracker.controller.payload.SignUpClientRequest;
import com.price.tracker.entity.Cliente;
import com.price.tracker.entity.Role;
import com.price.tracker.entity.RoleName;
import com.price.tracker.exception.Validar;
import com.price.tracker.repository.ClienteRepository;
import com.price.tracker.repository.RoleRepository;
import com.price.tracker.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.UUID;

/**
 * Serviço para autenticação .
 */
@Transactional
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRED)
@Component
public class AuthService
{
  /**
   * Regra de acesso inválida.
   */
  public static final String ERROR_REGRADAACESSOINVALIDA = "Error.regradaacessoinvalida";
  /**
   * Exceção lançada quando já existe um usuário na base de dados cadastrado como mesmo
   * username(administradores) ou  e-mail(clientes).
   */
  public static final String ERROR_USUARIO_JA_CADASTRADO = "Error.usuarioJaCadastrado";
  private static final String ERROR_USUARIO_NAO_CADASTRADO = "Error.usuarioNaoCadastrado";
  private static final String ERRO_TOKEN_INVALIDO = "Error.tokenInvalido";
  private static final String ERRO_DATA_NASCIMENTO_IGUAL_ATUAL = "Erro.dataNascimentoIgualAtual";


  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private ClienteRepository clienteRepository;

  @Autowired
  private RoleRepository roleRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private JwtTokenProvider tokenProvider;

//  @Autowired
//  private EmailService emailService;

//  @Autowired
//  private MailContentBuilderRecoverPassword mailContentBuilderRecoverPassword;

  @Value("${host}")
  private String host;


  /**
   * Lança exceção se já existir um cliente cadastrado na base com um determinado e-mail e cpf.
   *
   */
  public void validateExists(@Valid @RequestBody SignUpClientRequest signUpClientRequest)
  {
    Validar.isFalse(clienteRepository.existsByEmail(signUpClientRequest.getEmail()),
      ERROR_USUARIO_JA_CADASTRADO, "email");
  }



  /**
   * @param authentication objeto de autenticação .
   * @return Um JWT para o usuári autenticado .
   */
  public String getJasonWebToken(Authentication authentication)
  {
    SecurityContextHolder.getContext().setAuthentication(authentication);
    return tokenProvider.generateToken(authentication);
  }

  /**
   * @param emailOrUsername e-mail ou user name do usuário
   * @param password        senha
   * @return Um objeto de autenticação para o usuário corrente .
   */
  public Authentication getAuthentication(String emailOrUsername, String password)
  {
    return authenticationManager.authenticate(
      new UsernamePasswordAuthenticationToken(emailOrUsername, password)
    );
  }

  /**
   * @param signUpRequest {@link SignUpClientRequest}
   * @return um cliente cadastrado
   */
  public Cliente criateCliente(SignUpClientRequest signUpRequest)
  {
    Cliente cliente = new Cliente();
    cliente.setEmail(signUpRequest.getEmail());
    cliente.setNome(signUpRequest.getNome());
    cliente.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
    Role userRole = getRole(RoleName.ROLE_USER);
    cliente.adicionarRole(userRole);
    return clienteRepository.save(cliente);
  }


  private Role getRole(RoleName roleName)
  {
    Role role = roleRepository.findByName(roleName).orElse(null);
    Validar.notNull(role, ERROR_REGRADAACESSOINVALIDA,new Object[]{roleName.toString()});
    return role;
  }

  /**
   * Envia o email de recuperação de senha para o usuário .
   *
   * @param forgotPassword payload
   */
  public void sendEmailRecoverPassword(ForgotPassword forgotPassword)
  {

    String url;
    Cliente cliente = clienteRepository.findByEmail(forgotPassword.getEmail()).orElse(null);
    Validar.notNull(cliente, ERROR_USUARIO_NAO_CADASTRADO);
    cliente.setResetToken(UUID.randomUUID().toString());
    clienteRepository.save(cliente);
    url = host + "#/reset-password/" + cliente.getResetToken();
//    EmailPojo email = EmailFactory.criarEmail(cliente, EmailSubject.RECUPERAR_SENHA, url,
//      "recoverPasswordMail");
//    emailService.prepareAndSendSimpleMail(email, mailContentBuilderRecoverPassword);
  }

  /**
   * Altera a senha do usuário .
   *
   * @param resetPassword payload contendo as informações necessárias para resetar o password.
   */
  public void resetPassword(ResetPassword resetPassword)
  {
    Cliente user = clienteRepository.findByResetToken(resetPassword.getToken()).orElse(null);
    Validar.notNull(user, ERRO_TOKEN_INVALIDO);
    user.setResetToken(null);
    user.setPassword(passwordEncoder.encode(resetPassword.getNewPassword()));
    clienteRepository.save(user);
  }
}
