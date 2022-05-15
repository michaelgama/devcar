import 'reflect-metadata';
import { AppError } from '../../src/infra/errors/AppError';
import { CreateUserUseCase } from '../../src/app/usecases/CreateUserUseCase';
import { UserRepositoryInMemory } from '../in-memory/UserRepositoryInMemory';
import { User } from 'src/app/entities/User';

let createUser: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

let userData: User;
let userDataEmpty: User;
describe('Create User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUser = new CreateUserUseCase(userRepositoryInMemory);

    userData = {
      name: 'Jhon Doe',
      email: 'jhondoe@example.com',
      password: '123456',
    }

    userDataEmpty = {
      name: '',
      email: '',
      password: '',
    }
  });

  it('Should be able to create a new user', async () => {
    const user = await createUser.execute(userData);

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('Jhon Doe');
  });

  it('should not be able to create two users with the same email', async () => {
    await createUser.execute(userData);

    await expect(createUser.execute(userData)).rejects.toEqual(new AppError('User already exists.'));
  });

  it('should not be able to create users without data', async () => {
    await createUser.execute(userData);

    await expect(createUser.execute(userDataEmpty)).rejects.toEqual(new AppError('name, email, or password missin'));
  });
});
