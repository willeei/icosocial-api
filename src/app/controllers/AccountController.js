import User from '../models/User';

class AccountController {
  async store(req, res) {
    const account = User.findOne({ login: req.body.login });

    if (!account) {
      return res
        .status(404)
        .json({ error: 'This account does not exist or is already active' });
    }

    await account.update({ active: true });
    return res.status(204).send();
  }

  async destroy(req, res) {
    const userAccount = await User.findOne({ _id: req.user.id });

    await userAccount.update({ active: false });
    return res.status(204).send();
  }
}

export default new AccountController();
