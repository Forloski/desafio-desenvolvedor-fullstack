import { injectable, inject } from 'tsyringe';

import ISimulationRepository from '../repositories/ISimulationRepository';

import Simulation from '../infra/typeorm/entities/Simulation';

@injectable()
class CreateSimulationService {
  constructor(
    @inject('SimulationsRepository')
    private simulationsRepository: ISimulationRepository,
  ) {}

  public async execute(userId: string): Promise<Simulation[] | undefined> {
    const simulations = await this.simulationsRepository.findAllFromUser(
      userId,
    );

    return simulations;
  }
}

export default CreateSimulationService;
