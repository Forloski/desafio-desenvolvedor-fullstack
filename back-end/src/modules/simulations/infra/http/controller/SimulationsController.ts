import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateSimulationService from '@modules/simulations/services/CreateSimulationService';
import FindAllSimulationsFromUserService from '@modules/simulations/services/FindAllSimulationsFromUserService';

export default class SimulationsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      userId,
      investmentTime,
      initialDeposit,
      monthlyDeposit,
    } = request.body;

    const createSimulation = container.resolve(CreateSimulationService);

    const simulation = await createSimulation.execute({
      userId,
      investmentTime,
      initialDeposit,
      monthlyDeposit,
    });

    return response.json(classToClass(simulation));
  }

  public async findAllSimulationsFromUser(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { userId } = request.params;

    const findAllSimulationsFromUser = container.resolve(
      FindAllSimulationsFromUserService,
    );

    const simulations = await findAllSimulationsFromUser.execute(userId);

    return response.json(simulations);
  }
}
