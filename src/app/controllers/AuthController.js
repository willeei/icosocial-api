import jwt from 'jsonwebtoken';

import User from '../models/User';

import authConfig from '../../config/auth';

class AuthController {
  async store(req, res) {
    const { login, password } = req.body;

    const user = await User.findOne({ login });

    if (!user) {
      return res.status(200).json({ error: 'User not found' });
    }

    if (!user.active) {
      return res
        .status(200)
        .json({ error: 'This account is disabled, please contact us.' });
    }

    console.log(password);

    if (!(await user.comparePassword(password))) {
      return res.status(200).json({ error: 'Password is invalid' });
    }

    const { _id, name, type, active, avatar, first_access, person } = user;

    return res.json({
      user: {
        _id,
        login,
        name,
        type,
        active,
        first_access,
        person,
        avatar,
      },
      token: jwt.sign(
        {
          id: _id,
          name,
          login,
          first_access,
          person,
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
