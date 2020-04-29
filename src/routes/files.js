import { Router } from 'express';
import multer from 'multer';

import FileController from '../app/controllers/FileController';

import authMiddleware from '../app/middlewares/auth';

import multerConfig from '../config/multer';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/', authMiddleware, upload.single('file'), FileController.store);

export default routes;
