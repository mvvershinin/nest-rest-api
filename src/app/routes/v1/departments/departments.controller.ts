import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateDepartmentDto,
  UpdateDepartmentDto
} from './departments.dto.js';

@Controller('departments')
export class DepartmentsController {
  @Get()
  findAll(): string {
    return 'This action returns all departments';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `This action returns a ${id} department`;
  }

  @Post()
  create(@Body() createCatDto: CreateDepartmentDto) {
    return 'This action adds a new department';
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto
  ) {
    console.log(id);
    return `This action updates a #${id} department`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} department`;
  }
}
