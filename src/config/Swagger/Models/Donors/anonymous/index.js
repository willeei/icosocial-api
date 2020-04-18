import Get from './methods/get';
import Post from './methods/post';
import Put from './methods/put';
import Delete from './methods/delete';

const anonymousGet = {
  get: Get,
};

const post = {
  post: Post,
};

const byId = {
  put: Put,
  delete: Delete,
};

export { anonymousGet, post, byId };
