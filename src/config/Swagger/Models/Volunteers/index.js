import Post from './methods/post';
import { get, getById, profile } from './methods/get';
import { put, putActiveById } from './methods/put';
import Delete from './methods/delete';

const voluntary = {
  get,
  post: Post,
  put,
};

const profiles = {
  get: profile,
  delete: Delete,
};

const findById = {
  get: getById,
};

const activeById = {
  put: putActiveById,
};

export default voluntary;
export { profiles, findById, activeById };
