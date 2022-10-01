import { Module } from '@nestjs/common';
import AuthService from './auth.service';
import { AuthController } from './auth.controller';
import UsersModule from '../users/users.module';
//todo check does it need to import here
//import UsersService from '../users/users.service';

@Module({
  imports: [UsersModule /*, UsersService*/],
  providers: [AuthService],
  controllers: [AuthController],
})
export default class AuthModule {}
