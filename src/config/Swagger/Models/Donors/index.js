import Post from './methods/post';
import Get, { profile as get } from './methods/get';
import Put from './methods/put';
import Delete from './methods/delete';
import { anonymousGet, post, byId } from './anonymous';

const donors = {
  get: Get,
  post: Post,
  put: Put,
  delete: Delete,
};

const profile = {
  get,
};

const AnonymousDonor = {
  get: anonymousGet,
  post,
  byId,
};

export default donors;
export { profile, AnonymousDonor };
