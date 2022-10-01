import { Module } from '@nestjs/common';
import { WorkersModule } from './workers/workers.module';
import { DepartmentsModule } from './departments/departments.module';
import { PositionsModule } from './positions/positions.module';

import UsersModule from './users/users.module';
import AuthModule from './auth/auth.module';

@Module({
  imports: [AuthModule, UsersModule, WorkersModule, DepartmentsModule, PositionsModule],
})
export default class V1Module {}
