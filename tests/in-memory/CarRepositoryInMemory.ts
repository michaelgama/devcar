import { v4 as uuid } from 'uuid';

import { ICarRepository } from '../../src/app/repositories/ICarRepository';
import { Car } from '../../src/app/entities/Car';

class CarRepositoryInMemory implements ICarRepository {
  cars: Car[] = [];

  async create(car: Car): Promise<Car> {
    Object.assign(car, {
      id: uuid(),
    });
    this.cars.push(car);
    return car;
  }
}

export { CarRepositoryInMemory };
