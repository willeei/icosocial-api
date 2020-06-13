import { Router } from 'express';

import ResendEmailController from '../app/controllers/ResendEmailController';

const routes = Router();

routes.post('/resend/:email', ResendEmailController.store);

export default routes;
