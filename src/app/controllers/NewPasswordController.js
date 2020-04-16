import bcrypt from 'bcryptjs';

import User from '../models/User';

class NewPasswordController {
  async update(req, res) {
    const { oldPassword, password } = req.body;
    const user = await User.findOne({ _id: req.user.id });

    if (!user) {
      return res.status(404).json({ error: 'User not exists' });
    }

    if (oldPassword && !(await user.comparePassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const passwd = await bcrypt.hashSync(password, 8);

    await user.updateOne({ password: passwd });

    return res.json({ success: 'Password changed' });
  }
}

export default new NewPasswordController();
