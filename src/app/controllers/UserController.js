import bcrypt from 'bcryptjs';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ login: req.body.login });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { _id, name, login, active, type } = await User.create(req.body);

    return res.status(201).json({ _id, name, login, active, type });
  }

  async update(req, res) {
    const { login, oldPassword } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(400).json({ error: 'User not found' });
    }

    if (login !== user.login) {
      const userExists = await User.findOne({ login });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (oldPassword && !(await user.comparePassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    if (req.body.password) {
      req.body.password = await bcrypt.hashSync(req.body.password, 8);
    }

    await user.updateOne(req.body);

    const { _id, name, avatar } = await User.findById(req.user.id);

    return res.json({ _id, name, login, avatar });
  }
}

export default new UserController();
