import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export default class UsersService {
  private readonly users = [
    {
      userId: 1,
      login: 'login1',
      password: 'password1',
    },
    {
      userId: 2,
      login: 'login2',
      password: 'password2',
    },
  ];

  async findByLogin(login: string): Promise<User | undefined> {
    return this.users.find((user) => user.login === login);
  }
}
