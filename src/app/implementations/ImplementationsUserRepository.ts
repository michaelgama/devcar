import { prisma } from '../../prisma';

import { ICreateUser } from '../dtos/ICreateUser';
import { User } from '../entities/User';
import { IUserRepository } from '../repositories/IUserRepository';

class ImplementationsRepository implements IUserRepository {
  async create({ name, email, password }: ICreateUser): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  }
}

export { ImplementationsRepository };
