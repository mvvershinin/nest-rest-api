import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from 'typeorm';
import Department from './entity/department.entity.js';
import User from './entity/user.entity.js';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      //todo move to env
      type: 'postgres',
      host: "localhost",
      port: 5432,
      username: "default",
      password: "secret",
      database: "nest_rest_api",
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
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
