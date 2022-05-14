import { ICreateUser } from '../dtos/ICreateUser';
import { User } from '../entities/User';

interface IUserRepository {
  create(data: ICreateUser): Promise<User>;
  findByEmail(email: string): Promise<User>;
}

export { IUserRepository };
