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
}

export default new UserController();
