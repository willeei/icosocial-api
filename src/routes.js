import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import FileController from './app/controllers/FileController';
import DonorController from './app/controllers/DonorController';
import PasswordForgottenController from './app/controllers/PasswordForgottenController';
import ActiveOrDesableAccountController from './app/controllers/ActiveOrDesableAccountController';

import validateAuthStore from './app/validators/AuthStore';
import validateUserStore from './app/validators/UserStore';
import validateUserUpdater from './app/validators/UserUpdater';

import authMiddleware from './app/middlewares/auth';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', validateUserStore, UserController.store);
routes.put('/users/recoverPasswd', PasswordForgottenController.update);

routes.post('/auth', validateAuthStore, AuthController.store);

routes.post('/donors/anonymous', DonorController.store);

routes.use(authMiddleware);

routes.put('/users', validateUserUpdater, UserController.update);

routes.put('/account/active', ActiveOrDesableAccountController.store);
routes.delete('/account/disable', ActiveOrDesableAccountController.destroy);

routes.post('/donors', DonorController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
