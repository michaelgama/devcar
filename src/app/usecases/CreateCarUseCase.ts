import { AppError } from '../../../src/infra/errors/AppError';
import { inject, injectable } from 'tsyringe';

import { ICreateCar } from '../dtos/ICreateCar';
import { Car } from '../entities/Car';
import { ICarRepository } from '../repositories/ICarRepository';

@injectable()
class CreateCarUseCase {
  constructor(
    @inject('ImplementationsCarRepository')
    private carRepository: ICarRepository,
  ) { }

  async execute({ name, brand, description, price, user_id, phone }: ICreateCar) {
    if (name === '' || brand === '' || price === '' || phone === '') {
      throw new AppError('name, brand, price or phone missin.');
    }

    // const userAlreadyExists = await this.userRepository.findByEmail(email);

    // if (userAlreadyExists) {
    //   throw new AppError('User already exists.');
    // }

    const newCar = Car.create({
      name,
      brand,
      description,
      price,
      user_id,
      phone,
    });

    const car = await this.carRepository.create(newCar);

    return car;
  }
}

export { CreateCarUseCase };
