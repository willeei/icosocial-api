import User from '../models/User';

class TypeUserController {
  async update(req, res) {
    const { type } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(400).json({ error: 'User not found' });
    }

    await user.updateOne({ first_access: false, type });

    res.status(204).send();
  }
}

export default new TypeUserController();
