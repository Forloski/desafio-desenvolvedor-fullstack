import 'reflect-metadata';
import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import simulationsRouter from '@modules/simulations/infra/http/routes/simulations.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/simulations', simulationsRouter);

export default routes;
