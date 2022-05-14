import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from '../usecases/CreateUserUseCase';

class UserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUser = container.resolve(CreateUserUseCase);

    await createUser.execute({
      name,
      email,
      password,
    });

    return res.status(201).send();
  }
}

export { UserController };
