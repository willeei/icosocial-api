import { Router } from 'express';

import authRouter from './routes/auth';
import emailRouter from './routes/email';
import filesRouter from './routes/files';
import usersRouter from './routes/users';
import donorsRouter from './routes/donors';
import accountsRouter from './routes/accounts';
import donationsRouter from './routes/donations';
import volunteersRouter from './routes/volunteers';

const router = Router();

router.use('/auth', authRouter);
router.use('/email', emailRouter);
router.use('/files', filesRouter);
router.use('/users', usersRouter);
router.use('/donors', donorsRouter);
router.use('/accounts', accountsRouter);
router.use('/donations', donationsRouter);
router.use('/volunteers', volunteersRouter);

export default router;
