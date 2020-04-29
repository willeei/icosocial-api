import Donation from '../models/Donation';

class DonationController {
  async store(req, res) {
    const { value, donor_id } = req.body;

    const donation = await Donation.create({ value, donor_id });

    return res.json(donation);
  }
}

export default new DonationController();
