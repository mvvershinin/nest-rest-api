import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from 'typeorm';
import Department from './entity/department.entity.js';

import User from './entity/user.entity';

import config from '../config/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [User, Department],
    }),
  ],
})
export default class DatabaseModule {
  private readonly _connection: Connection;

  constructor(connection: Connection) {
    this._connection = connection;
  }

  connection(): Connection {
    return this._connection;
  }
}
