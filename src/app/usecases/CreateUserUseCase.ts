import { hash } from 'bcrypt';
import { AppError } from 'src/infra/errors/AppError';
import { inject, injectable } from 'tsyringe';

import { ICreateUser } from '../dtos/ICreateUser';
import { User } from '../entities/User';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('ImplementationsRepository')
    private userRepository: IUserRepository,
  ) { }

  async execute({ name, email, password }: ICreateUser) {
    if (name === '' || email === '' || password === '') {
      throw new AppError('name, email, or password missin');
    }

    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists.');
    }

    const passwordHash = await hash(password, 10);

    const newUser = User.create({
      name,
      email,
      password: passwordHash,
    });

    const user = await this.userRepository.create(newUser);

    return user;
  }
}

export { CreateUserUseCase };
