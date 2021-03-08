import { container } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import ISimulationRepository from '@modules/simulations/repositories/ISimulationRepository';
import SimulationsRepository from '@modules/simulations/infra/typeorm/repositories/SimulationsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ISimulationRepository>(
  'SimulationsRepository',
  SimulationsRepository,
);
