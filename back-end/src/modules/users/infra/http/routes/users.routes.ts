import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UserController from '../controller/UsersController';

const usersRouter = Router();

const userController = new UserController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      investmentValue: Joi.number().required(),
      investmentTimeInMonths: Joi.number().required(),
    },
  }),
  userController.create,
);

export default usersRouter;
