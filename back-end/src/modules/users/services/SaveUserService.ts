import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

@injectable()
class SaveUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ name, email, phone }: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepository.findByEmail(email);

    if (user) {
      return this.usersRepository.save({ ...user, name, phone });
    }

    return this.usersRepository.create({
      name,
      email,
      phone,
    });
  }
}

export default SaveUserService;
