import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import { injectable, inject } from 'tsyringe';

// import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    email,
    phone,
    investmentValue,
    investmentTimeInMonths,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepository.create({
      name,
      email,
      phone,
      investmentValue,
      investmentTimeInMonths,
    });

    return user;
  }
}

export default CreateUserService;
