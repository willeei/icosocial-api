import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import FileController from './app/controllers/FileController';
import AccountController from './app/controllers/AccountController';
import PasswordForgottenController from './app/controllers/PasswordForgottenController';

import validateAuthStore from './app/validators/AuthStore';
import validateUserStore from './app/validators/UserStore';
import validateUserUpdater from './app/validators/UserUpdater';

import authMiddleware from './app/middlewares/auth';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', validateUserStore, UserController.store);
routes.put('/users/recoverPasswd', PasswordForgottenController.update);

routes.post('/auth', validateAuthStore, AuthController.store);

routes.put('/account/active', AccountController.store);

routes.use(authMiddleware);

routes.put('/users', validateUserUpdater, UserController.update);

routes.delete('/account/disable', AccountController.destroy);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
