import ISimulation from './ISimulation';

export default interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  simulations: ISimulation[];
}
