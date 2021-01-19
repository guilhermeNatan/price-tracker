export const getMessageByErroCode = (error) => {
  switch (error) {
    case 'auth/wrong-password':
      return 'Senha incorreta!';
    case 'auth/user-not-found':
      return 'Usuário não encontrado';
    case 'auth/email-already-in-use':
      return 'Já existe uma conta cadastrada com este e-mail';
    case 'auth/invalid-email':
      return 'E-mail inválido';
    default:
      console.log('erro desconhecido', error);
      return 'Error desconhecido';
  }
};
