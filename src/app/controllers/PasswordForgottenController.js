import bcrypt from 'bcryptjs';

import User from '../models/User';

import PasswordForgottenService from '../services/PasswordForgottenService';

class PasswordForgottenController {
  async update(req, res) {
    const { email: login } = req.body;

    const user = await User.findOne({ login });
    if (!user) {
      return res.status(401).json({ error: 'User does not exist' });
    }
    const { _id: id } = user;

    let randomPasswd = await PasswordForgottenService.run({ user_id: id });
    randomPasswd = await bcrypt.hashSync(randomPasswd, 8);
    await user.updateOne({ password: randomPasswd, passwd_recover: true });

    return res.status(204).send();
  }
}

export default new PasswordForgottenController();
