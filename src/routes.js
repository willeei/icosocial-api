import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import authController from './app/controllers/AuthController';
import FileController from './app/controllers/FileController';
import DonorController from './app/controllers/DonorController';
import NewPasswordController from './app/controllers/NewPasswordController';
import PasswordForgottenController from './app/controllers/PasswordForgottenController';
import ActiveOrDesableAccountController from './app/controllers/ActiveOrDesableAccountController';

import validateauthStore from './app/validators/AuthStore';
import validateUserStore from './app/validators/UserStore';
import validateUserUpdater from './app/validators/UserUpdater';
import validatePasswdUpdater from './app/validators/PasswdUpdater';

import authMiddleware from './app/middlewares/auth';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', validateUserStore, UserController.store);
routes.put('/users/passwd/recover', PasswordForgottenController.update);

routes.post('/auth', validateauthStore, authController.store);

routes.put('/account/active', ActiveOrDesableAccountController.update);

routes.post('/donors/anon', DonorController.store);

routes.put('/donors/anon/:id', DonorController.update);
routes.delete('/donors/anon/:id', DonorController.delete);

routes.get('/donors/anon/:cpf', DonorController.show);

routes.use(authMiddleware);

routes.put('/users', validateUserUpdater, UserController.update);
routes.put(
  '/users/passwd/update',
  validatePasswdUpdater,
  NewPasswordController.update
);

routes.delete('/account/disable', ActiveOrDesableAccountController.destroy);

routes.get('/donors', DonorController.index);
routes.post('/donors', DonorController.store);
routes.put('/donors', DonorController.update);
routes.delete('/donors', DonorController.delete);

routes.get('/donors/profile', DonorController.show);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
