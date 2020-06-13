import User from '../models/User';

class TypeUserController {
  async store(req, res) {
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(200).json({ error: 'User not found' });
    }

    await user.updateOne({ first_access: false });

    res.status(204).send();
  }

  async update(req, res) {
    const { type } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(200).json({ error: 'User not found' });
    }

    await user.updateOne({ type });

    res.status(204).send();
  }
}

export default new TypeUserController();
