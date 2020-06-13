import { Router } from 'express';

import UserController from '../app/controllers/UserController';
import TypeUserController from '../app/controllers/TypeUserController';
import NewPasswordController from '../app/controllers/NewPasswordController';
import PasswordForgottenController from '../app/controllers/PasswordForgottenController';

import authMiddleware from '../app/middlewares/auth';

const routes = Router();

routes.get('/', UserController.index);

routes.post('/', UserController.store);
routes.post('/fist-access', authMiddleware, TypeUserController.store);

routes.put('/', authMiddleware, UserController.update);
routes.put('/type', authMiddleware, TypeUserController.update);
routes.put('/passwd/recover', PasswordForgottenController.update);
routes.put('/passwd/update', authMiddleware, NewPasswordController.update);

export default routes;
