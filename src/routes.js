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
import VoluntaryController from './app/controllers/VoluntaryController';

const routes = Router();
const upload = multer(multerConfig);

// Auth
routes.post('/auth', validateauthStore, authController.store);

// Users
routes.post('/users', validateUserStore, UserController.store);

routes.put('/users/passwd/recover', PasswordForgottenController.update);
routes.put(
  '/users',
  authMiddleware,
  validateUserUpdater,
  UserController.update
);
routes.put(
  '/users/passwd/update',
  authMiddleware,
  validatePasswdUpdater,
  NewPasswordController.update
);

// Accounts
routes.put('/account/active', ActiveOrDesableAccountController.update);

routes.delete(
  '/account/disable',
  authMiddleware,
  ActiveOrDesableAccountController.destroy
);

// Donors
routes.get('/donors', authMiddleware, DonorController.index);
routes.get('/donors/profile', authMiddleware, DonorController.show);

routes.post('/donors', authMiddleware, DonorController.store);
routes.put('/donors', authMiddleware, DonorController.update);
routes.delete('/donors', authMiddleware, DonorController.delete);

routes.get('/donors/anon/:cpf', DonorController.show);
routes.post('/donors/anon', DonorController.store);
routes.put('/donors/anon/:id', DonorController.update);
routes.delete('/donors/anon/:id', DonorController.delete);

// Volunteers
routes.get('/volunteers', authMiddleware, VoluntaryController.index);
routes.get('/volunteers/profile', authMiddleware, VoluntaryController.show);
routes.get('/volunteers/:id', VoluntaryController.findById);

routes.post('/volunteers', VoluntaryController.store);

routes.put('/volunteers', authMiddleware, VoluntaryController.update);
routes.put(
  '/volunteers/active/:id',
  authMiddleware,
  VoluntaryController.active
);

routes.delete(
  '/volunteers/profile',
  authMiddleware,
  VoluntaryController.delete
);

// Files
routes.post(
  '/files',
  authMiddleware,
  upload.single('file'),
  FileController.store
);

export default routes;
