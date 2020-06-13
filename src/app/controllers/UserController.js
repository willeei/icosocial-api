import bcrypt from 'bcryptjs';
import * as Yup from 'yup';

import User from '../models/User';

import NewUserMailService from '../services/NewUserMailService';

class UserController {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  }

  async store(req, res) {
    const userExists = await User.findOne({ login: req.body.login });

    if (userExists) {
      return res.status(200).json({ error: 'User already exists.' });
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      login: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    const isValid = await schema.isValid(req.body, { abortEarly: false });

    if (!isValid) {
      await schema.validate(req.body, { abortEarly: false }).catch(err => {
        return res
          .status(200)
          .json({ error: 'Validation fails', messages: err.inner });
      });
    } else {
      console.log(`User a ser criado -> ${req.body.name} ${req.body.login}`);

      const { _id, name, login, active, type } = await User.create(req.body);

      await NewUserMailService.run({ user_id: _id });

      return res.status(201).json({ _id, name, login, active, type });
    }

    return res.status(400).send();
  }

  async update(req, res) {
    const { login, oldPassword } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(200).json({ error: 'User not found' });
    }

    if (login !== user.login) {
      const userExists = await User.findOne({ login });

      if (userExists) {
        return res.status(200).json({ error: 'User already exists' });
      }
    }

    if (oldPassword && !(await user.comparePassword(oldPassword))) {
      return res.status(200).json({ error: 'Password does not match' });
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
