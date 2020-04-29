import { Router } from 'express';

import DonationController from '../app/controllers/DonationController';

import authMiddleware from '../app/middlewares/auth';

const routes = Router();

routes.post('/', authMiddleware, DonationController.store);

export default routes;
