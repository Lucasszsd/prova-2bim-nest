import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service'; // Verifique o caminho correto
import { User } from './users/interfaces/user.interface'; // Importe corretamente

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(createUserDto: User): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  async login(user: User): Promise<any> {
    return user;
  }
}
