import ICreateSimulationDTO from '@modules/simulations/dtos/ICreateSimulationDTO';
import { injectable, inject } from 'tsyringe';

import ISimulationRepository from '../repositories/ISimulationRepository';

import Simulation from '../infra/typeorm/entities/Simulation';

@injectable()
class CreateSimulationService {
  constructor(
    @inject('SimulationsRepository')
    private simulationsRepository: ISimulationRepository,
  ) {}

  public async execute({
    userId,
    investmentTime,
    initialDeposit,
    monthlyDeposit,
  }: ICreateSimulationDTO): Promise<Simulation> {
    const simulation = await this.simulationsRepository.create({
      userId,
      investmentTime,
      initialDeposit,
      monthlyDeposit,
    });

    return simulation;
  }
}

export default CreateSimulationService;
