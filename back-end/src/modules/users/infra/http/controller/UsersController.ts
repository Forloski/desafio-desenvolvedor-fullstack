import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import SaveUserService from '@modules/users/services/SaveUserService';

export default class UsersController {
  public async save(request: Request, response: Response): Promise<Response> {
    const { name, email, phone } = request.body;

    const saveUser = container.resolve(SaveUserService);

    const user = await saveUser.execute({
      name,
      email,
      phone,
    });

    return response.json(classToClass(user));
  }
}
