import User from '../models/User';
import Donor from '../models/Donor';
import Voluntary from '../models/Voluntary';

import Types from '../utils/constants/Types';

/**
 * @author Williams Gomes
 */
class VoluntaryController {
  async index(req, res) {
    if (!req.user) {
      return res.status(400).json({ error: 'No informed users' });
    }

    const voluntary = await Voluntary.find();

    return res.json(voluntary);
  }

  async show(req, res) {
    if (!req.user) {
      return res.status(400).json({ error: 'No informed users' });
    }

    if (req.user.type !== Types.VOLUNTARY) {
      return res.status(400).json({ error: 'User is not a voluntary' });
    }

    const voluntary = await Voluntary.findOne({
      user_id: req.user.id,
      disabled: false,
    });

    return res.json(voluntary);
  }

  async findById(req, res) {
    const { id } = req.params;
    const voluntary = await Voluntary.findById(id);

    return res.json(voluntary);
  }

  async store(req, res) {
    const { login, name, password, type } = req.body;

    const {
      state,
      country,
      city,
      address,
      zip_code,
      number,
      complement,
    } = req.body;

    const { cpf, cell_phone, telephone, date_of_birth, info } = req.body;

    const userExists = await User.findOne({ login });
    const voluntaryExists = await Voluntary.findOne({ cpf: req.body.cpf });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    if (voluntaryExists) {
      return res
        .status(400)
        .json({ error: 'Voluntary registration already exists' });
    }

    const mailExists = await Voluntary.findOne({ email: req.body.login });

    if (mailExists) {
      return res
        .status(400)
        .json({ error: 'There is already a voluntary with this email' });
    }

    const donor = await Donor.findOne({
      cpf: req.body.cpf,
      disabled: false,
    });

    if (donor) {
      return res
        .status(400)
        .json({ error: 'There is already a donor registration with this CPF' });
    }

    const { _id } = await User.create({ login, name, password, type });

    const voluntary = await Voluntary.create({
      name,
      cpf,
      cell_phone,
      telephone,
      date_of_birth,
      email: login,
      state,
      country,
      city,
      address,
      zip_code,
      number,
      complement,
      info,
      user_id: _id,
    });

    return res.json(voluntary);
  }

  async update(req, res) {
    if (!req.user) {
      return res.status(400).json({ error: 'No informed users' });
    }

    const voluntary = await Voluntary.findOne({ user_id: req.user.id });

    const mailExists = await Voluntary.findOne({ email: req.body.email });

    if (mailExists) {
      return res
        .status(400)
        .json({ error: 'There is already a voluntary with this email' });
    }

    await voluntary.updateOne(req.body);

    return res.status(204).send();
  }

  async active(req, res) {
    const { id } = req.params;

    const voluntary = await Voluntary.findById(id);

    await voluntary.updateOne({ disabled: false });

    return res.status(204).send();
  }

  async delete(req, res) {
    if (!req.user) {
      return res.status(400).json({ error: 'No informed users' });
    }

    const voluntary = await Voluntary.findOne({
      user_id: req.user.id,
      disabled: false,
    });

    await voluntary.updateOne({ disabled: true });

    return res.status(204).send();
  }
}

export default new VoluntaryController();
