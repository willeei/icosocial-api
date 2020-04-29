import { Router } from 'express';

import ActiveOrDesableAccountController from '../app/controllers/ActiveOrDesableAccountController';

import authMiddleware from '../app/middlewares/auth';

const routes = Router();

routes.put('/active', ActiveOrDesableAccountController.update);

routes.delete(
  '/disable',
  authMiddleware,
  ActiveOrDesableAccountController.destroy
);

export default routes;
