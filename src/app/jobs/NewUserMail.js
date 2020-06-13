import Mail from '../../libs/Mail';

class NewUserMail {
  get key() {
    return 'NewUserMail';
  }

  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      to: `${user.login} <${user.login}>`,
      subject: 'Seja Bem vindo :D',
      template: 'newUser',
      context: {
        user,
        link: process.env.PAGE_CONFIRM_ACCOUNT,
      },
    });
  }
}

export default new NewUserMail();
