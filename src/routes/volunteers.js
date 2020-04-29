import { Router } from 'express';

import VoluntaryController from '../app/controllers/VoluntaryController';

import authMiddleware from '../app/middlewares/auth';

const routes = Router();

routes.get('/', authMiddleware, VoluntaryController.index);
routes.get('/profile', authMiddleware, VoluntaryController.show);
routes.get('/:id', VoluntaryController.findById);

routes.post('/', VoluntaryController.store);

routes.put('/', authMiddleware, VoluntaryController.update);
routes.put('/active/:id', authMiddleware, VoluntaryController.active);

routes.delete('/profile', authMiddleware, VoluntaryController.delete);

export default routes;
