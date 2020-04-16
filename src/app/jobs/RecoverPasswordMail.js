import Mail from '../../libs/Mail';

class RecoverPasswordMail {
  get key() {
    return 'RecoverPasswordMail';
  }

  async handle({ data }) {
    const { user, randomPasswd } = data;

    await Mail.sendMail({
      to: `${user.login} <${user.login}>`,
      subject: 'Recuperação de senha',
      template: 'recoverPassword',
      context: {
        user,
        randomPasswd,
      },
    });
  }
}

export default new RecoverPasswordMail();
