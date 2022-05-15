import { ImplementationsRepository } from '../../app/implementations/ImplementationsUserRepository';
import { ImplementationsCarRepository } from '../../app/implementations/ImplementationsCarRepository';
import { ICarRepository } from 'src/app/repositories/ICarRepository';
import { IUserRepository } from 'src/app/repositories/IUserRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>(
  'ImplementationsRepository',
  ImplementationsRepository,
);

container.registerSingleton<ICarRepository>(
  'ImplementationsCarRepository',
  ImplementationsCarRepository,
);
