import jwt from 'jsonwebtoken';

import User from '../models/User';

import authConfig from '../../config/auth';

class AuthController {
  async store(req, res) {
    const { login, password } = req.body;

    const user = await User.findOne({ login });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!user.active) {
      return res
        .status(401)
        .json({ error: 'This account is disabled, please contact us.' });
    }

    if (!(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { _id, name, type, active, avatar } = user;

    return res.json({
      user: {
        _id,
        login,
        name,
        type,
        active,
        avatar,
      },
      token: jwt.sign(
        {
          id: _id,
          name,
          login,
          type,
          active,
        },
        authConfig.secret,
        { expiresIn: authConfig.expiresIn }
      ),
    });
  }
}

export default new AuthController();
