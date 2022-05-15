import { v4 as uuid } from 'uuid';

import { IUserRepository } from '../../src/app/repositories/IUserRepository';
import { User } from '../../src/app/entities/User';

class UserRepositoryInMemory implements IUserRepository {
  users: User[] = [];

  async create(user: User): Promise<User> {
    Object.assign(user, {
      id: uuid(),
    });
    this.users.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
}

export { UserRepositoryInMemory };
