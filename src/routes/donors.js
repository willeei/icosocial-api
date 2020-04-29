import { Router } from 'express';

import DonorController from '../app/controllers/DonorController';

import authMiddleware from '../app/middlewares/auth';

const routes = Router();

routes.get('/', authMiddleware, DonorController.index);
routes.get('/profile', authMiddleware, DonorController.show);

routes.post('/', authMiddleware, DonorController.store);
routes.put('/', authMiddleware, DonorController.update);
routes.delete('/', authMiddleware, DonorController.delete);

routes.get('/anon/:cpf', DonorController.show);
routes.post('/anon', DonorController.store);
routes.put('/anon/:id', DonorController.update);
routes.delete('/anon/:id', DonorController.delete);

export default routes;
