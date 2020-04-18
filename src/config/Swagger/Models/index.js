import info from './info';
import tags from './tags';
import components from './components';

import Auth from './Auth';
import Files from './Files';
import Donor, { profile, AnonymousDonor } from './Donors';
import { active, disable } from './Accounts';
import Users, { recover, update } from './Users';

const Accounts = { active, disable };
const UsersPasswd = { recover, update };
const Donors = { Donor, profile, AnonymousDonor };

export default { info, tags, components };
export { Accounts, Auth, Files, Users, UsersPasswd, Donors };
