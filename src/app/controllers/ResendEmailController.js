import User from '../models/User';

import NewUserMailService from '../services/NewUserMailService';

class ResendEmailController {
  async store(req, res) {
    const { email } = req.params;

    const user = await User.findOne({ login: email });

    const { _id } = user;

    if (!user) {
      return res.status(200).json({ error: 'User already exists.' });
    }

    await NewUserMailService.run({ user_id: _id });

    return res.status(204).send();
  }
}

export default new ResendEmailController();
