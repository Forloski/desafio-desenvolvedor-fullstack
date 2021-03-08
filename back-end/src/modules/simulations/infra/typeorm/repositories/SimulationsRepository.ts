import { getRepository, Repository } from 'typeorm';

import ISimulationRepository from '@modules/simulations/repositories/ISimulationRepository';
import ICreateSimulationDTO from '@modules/simulations/dtos/ICreateSimulationDTO';

import Simulation from '../entities/Simulation';

class SimulationsRepository implements ISimulationRepository {
  private ormRepository: Repository<Simulation>;

  constructor() {
    this.ormRepository = getRepository(Simulation);
  }

  public async create(
    simulationData: ICreateSimulationDTO,
  ): Promise<Simulation> {
    const simulation = this.ormRepository.create(simulationData);

    await this.ormRepository.save(simulation);

    return simulation;
  }

  public async findAllFromUser(userId: string): Promise<Simulation[]> {
    const simulations = await this.ormRepository.find({
      where: { userId },
    });

    return simulations;
  }
}

export default SimulationsRepository;
