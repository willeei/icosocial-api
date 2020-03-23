import crypto from 'crypto';

import User from '../models/User';
import RecoverPasswordMail from '../jobs/RecoverPasswordMail';
import Queue from '../../libs/Queue';

class PasswordForgottenService {
  async run({ user_id }) {
    const id = user_id;
    const user = await User.findById(id);

    const randomPasswd = await crypto.randomBytes(8).toString('hex');
    await Queue.add(RecoverPasswordMail.key, { user, randomPasswd });

    return randomPasswd;
  }
}

export default new PasswordForgottenService();
