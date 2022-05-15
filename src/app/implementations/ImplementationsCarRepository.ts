import { prisma } from '../../prisma';

import { ICreateCar } from '../dtos/ICreateCar';
import { Car } from '../entities/Car';
import { ICarRepository } from '../repositories/ICarRepository';

class ImplementationsCarRepository implements ICarRepository {
  async create({ name, brand, description, price, user_id, phone }: ICreateCar): Promise<Car> {
    const car = await prisma.car.create({
      data: {
        name,
        brand,
        description,
        price,
        user_id,
        phone,
      },
    });
    return car;
  }
}

export { ImplementationsCarRepository };
