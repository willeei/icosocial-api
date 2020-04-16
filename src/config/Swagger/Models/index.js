import info from './info';
import tags from './tags';
import components from './components';

import { active, disable } from './Accounts';
import Auth from './Auth';
import Files from './Files';
import Users, { recover, update } from './Users';

const Accounts = { active, disable };
const UsersPasswd = { recover, update };

export default { info, tags, components };
export { Accounts, Auth, Files, Users, UsersPasswd };
