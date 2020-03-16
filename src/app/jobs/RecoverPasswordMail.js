import Mail from '../../libs/Mail';

class RecoverPasswordMail {
  get key() {
    return 'RecoverPasswordMail';
  }

  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      to: '',
      subject: 'Recuperação de senha',
      template: 'recoverPassword',
      context: {
        user,
      },
    });
  }
}

export default new RecoverPasswordMail();
