import { ICreateCar } from '../dtos/ICreateCar';
import { Car } from '../entities/Car';

interface ICarRepository {
  create(data: ICreateCar): Promise<Car>;
}

export { ICarRepository };
