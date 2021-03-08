import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import SimulationsController from '../controller/SimulationsController';

const simulationsRouter = Router();

const simulationsController = new SimulationsController();

simulationsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      userId: Joi.string().required(),
      investmentTime: Joi.string().required(),
      initialDeposit: Joi.string().required(),
      monthlyDeposit: Joi.string().required(),
    },
  }),
  simulationsController.create,
);

simulationsRouter.get(
  '/:userId',
  simulationsController.findAllSimulationsFromUser,
);

export default simulationsRouter;
