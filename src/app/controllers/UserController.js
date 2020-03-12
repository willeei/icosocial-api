import User from '../models/User';

class UserController {
  async store(req, res) {
    const { id, login, active, type } = await User.create(req.body);

    return res.status(201).json({ id, login, active, type });
  }
}

export default new UserController();
