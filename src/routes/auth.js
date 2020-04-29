import { Router } from 'express';

import AuthController from '../app/controllers/AuthController';

import validateauthStore from '../app/validators/AuthStore';

const routes = Router();

routes.post('/', validateauthStore, AuthController.store);

export default routes;
