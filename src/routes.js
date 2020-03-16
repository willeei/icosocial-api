import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import FileController from './app/controllers/FileController';

import validateAuthStore from './app/validators/AuthStore';
import validateUserStore from './app/validators/UserStore';
import validateUserUpdater from './app/validators/UserUpdater';

import authMiddleware from './app/middlewares/auth';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', validateUserStore, UserController.store);
routes.post('/auth', validateAuthStore, AuthController.store);

routes.use(authMiddleware);

routes.put('/users', validateUserUpdater, UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
