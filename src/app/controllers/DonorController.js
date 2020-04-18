import Donor from '../models/Donor';

class DonorController {
  async index(req, res) {
    if (req.user) {
      return res.status(400).json({ error: 'No informed users' });
    }

    const donors = await Donor.find();

    return res.json(donors);
  }

  async show(req, res) {
    let donor;

    if (req.user) {
      donor = await Donor.findOne({
        user_id: req.user.id,
        anonymous: false,
        disabled: false,
      });
    } else {
      donor = await Donor.findOne({
        cpf: req.params.cpf,
        anonymous: true,
        disabled: false,
      });
    }

    return res.json(donor);
  }

  async store(req, res) {
    let donorExists;
    let userId;

    if (req.user) {
      userId = req.user.id;
      donorExists = await Donor.findOne({ user_id: req.user.id });
    } else {
      donorExists = await Donor.findOne({ cpf: req.body.cpf });
    }

    if (donorExists) {
      return res
        .status(400)
        .json({ error: 'Donor registration already exists' });
    }

    const mailExists = await Donor.findOne({ email: req.body.email });

    if (mailExists) {
      return res
        .status(400)
        .json({ error: 'There is already a donor with this email' });
    }

    const donor = req.body;

    let result;

    if (userId) {
      donor.user_id = userId;
      donor.anonymous = false;

      result = await Donor.create(req.body);
    } else {
      result = await Donor.create(req.body);
    }

    return res.json(result);
  }

  async update(req, res) {
    let userId;
    let donorExists;

    if (req.user) {
      userId = req.user.id;
      donorExists = await Donor.findOne({ user_id: req.user.id });
    } else {
      donorExists = await Donor.findOne({ _id: req.params.id });
    }

    if (!donorExists) {
      return res
        .status(400)
        .json({ error: 'There is no registration for this donor' });
    }

    const mailExists = await Donor.findOne({ email: req.body.email });

    if (mailExists) {
      return res
        .status(400)
        .json({ error: 'There is already a donor with this email' });
    }

    const donor = donorExists;

    if (userId) {
      donor.user_id = userId;
    }

    await donor.updateOne(req.body);

    return res.status(204).send();
  }

  async delete(req, res) {
    const { id } = req.params;
    let userId;

    const { anonymous } = id ? await Donor.findById(id) : false;

    if (req.user) {
      userId = req.user.id;
    }

    if (userId) {
      await Donor.findOneAndUpdate({ user_id: userId }, { disabled: true });
    } else if (anonymous) {
      await Donor.findOneAndUpdate({ _id: id }, { disabled: true });
    } else {
      return res.status(400).json({ error: 'Donor is not anonymous' });
    }

    return res.status(204).send();
  }
}

export default new DonorController();
