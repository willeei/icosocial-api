import User from '../models/User';

class PasswordForgottenController {
  async update(req, res) {
    const { email: login } = req.body;

    const user = await User.findOne({ login });

    if (!user) {
      return res.status(401).json({ error: 'User does not exist' });
    }
  }
}

export default new PasswordForgottenController();
