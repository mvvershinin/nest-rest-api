import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DepartmentRepository from '../../../database/repositories/department.repository.js';
import { DepartmentsController } from './departments.controller';
import { DepartmentsService } from './departments.service';

@Module({
  imports:[TypeOrmModule.forFeature([DepartmentRepository]),],
  controllers: [DepartmentsController],
  providers: [DepartmentsService]
})
export class DepartmentsModule {}
