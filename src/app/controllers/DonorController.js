import Donor from '../models/Donor';

class DonorController {
  async store(req, res) {
    let donorExists;
    let userId;

    if (req.user) {
      userId = req.user.id;
      donorExists = await Donor.findOne({ user_id: req.user.id });
    }

    if (donorExists) {
      return res
        .status(400)
        .json({ error: 'Donor registration already exists' });
    }

    const mailExists = await Donor.findOne({ mail: req.body.mail });

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
}

export default new DonorController();
