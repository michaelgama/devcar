import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCarUseCase } from '../usecases/CreateCarUseCase';

class CarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, brand, description, price, user_id, phone } = req.body;

    const createCar = container.resolve(CreateCarUseCase);

    await createCar.execute({
      name,
      brand,
      description,
      price,
      user_id,
      phone,
    });

    return res.status(201).send();
  }
}

export { CarController };
