import { ImplementationsRepository } from '../../app/implementations/ImplementationsUserRepository';
import { IUserRepository } from 'src/app/repositories/IUserRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>(
  'ImplementationsRepository',
  ImplementationsRepository,
);
