import { Test, TestingModule } from '@nestjs/testing';
import AuthService from './auth.service';
import UsersService from '../users/users.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });

  it('should validate login and password', async () => {
    const payload = {
      login: 'login1',
      password: 'password1',
    };

    const user = await service.validateUser(payload.login, payload.password);

    expect(user['login']).toBe(payload.login);
  });
});
