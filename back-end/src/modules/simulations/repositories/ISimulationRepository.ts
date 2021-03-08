import Simulation from '../infra/typeorm/entities/Simulation';
import ICreateSimulationDTO from '../dtos/ICreateSimulationDTO';

export default interface IUsersRepository {
  create(data: ICreateSimulationDTO): Promise<Simulation>;
  findAllFromUser(userId: string): Promise<Simulation[]>;
}
