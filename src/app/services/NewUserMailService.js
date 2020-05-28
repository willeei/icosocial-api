import User from '../models/User';
import NewUserMail from '../jobs/NewUserMail';
import Queue from '../../libs/Queue';

class NewUserMailService {
  async run({ user_id }) {
    const id = user_id;
    const user = await User.findById(id);

    await Queue.add(NewUserMail.key, { user });
  }
}

export default new NewUserMailService();
