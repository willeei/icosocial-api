import User from '../models/User';

class ActiveOrDesableAccountController {
  async update(req, res) {
    const account = await User.findOne({ login: req.body.email });

    if (!account) {
      return res.status(200).json({ error: 'This account does not exist' });
    }

    if (account.active) {
      return res.status(200).json({ error: 'Account is already active' });
    }

    await account.updateOne({ active: true });

    return res.status(204).send();
  }

  async destroy(req, res) {
    const userAccount = await User.findOne({ _id: req.user.id });

    await userAccount.update({ active: false });
    return res.status(204).send();
  }
}

export default new ActiveOrDesableAccountController();
