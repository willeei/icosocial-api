import bcrypt from 'bcryptjs';

import User from '../models/User';

class NewPasswordController {
  async update(req, res) {
    const user = await User.findOne({ _id: req.userId });

    if (!user) {
      return res.status(404).json({ error: 'User not exists' });
    }

    const password = await bcrypt.hashSync(req.body.password, 8);

    await user.updateOne({ password });

    return res.json({ success: 'Password changed' });
  }
}

export default new NewPasswordController();
