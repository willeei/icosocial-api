import { Router } from 'express';

<<<<<<< HEAD
import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/auth', AuthController.store);
=======
const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'Bem-vindo' }));
>>>>>>> 2ecbef07ecb53fdbe43c3e62a7af3bc0539d34e8

export default routes;
