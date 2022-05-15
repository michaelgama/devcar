import 'reflect-metadata';
import { AppError } from '../../src/infra/errors/AppError';
import { CreateCarUseCase } from '../../src/app/usecases/CreateCarUseCase';
import { CarRepositoryInMemory } from '../in-memory/CarRepositoryInMemory';
import { Car } from 'src/app/entities/Car';

let createCar: CreateCarUseCase;
let carRepositoryInMemory: CarRepositoryInMemory;

let carData: Car;
let carDataEmpty: Car;
describe('Create Car', () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarRepositoryInMemory();
    createCar = new CreateCarUseCase(carRepositoryInMemory);

    carData = {
      name: 'Car',
      brand: 'Car Brand',
      description: 'Car Description',
      price: 'Price',
      user_id: '123456',
      phone: '12345678',
    }

    carDataEmpty = {
      name: '',
      brand: '',
      description: '',
      price: '',
      user_id: '',
      phone: '',
    }
  });

  it('Should be able to create a new car', async () => {
    const car = await createCar.execute(carData);

    expect(car).toHaveProperty('id');
    expect(car.name).toBe('Car');
  });

  it('should not be able to create cars without data', async () => {
    await createCar.execute(carData);

    await expect(createCar.execute(carDataEmpty)).rejects.toEqual(
      new AppError('name, brand, description, price, user_id or phone missin.'
      ));
  });
});
