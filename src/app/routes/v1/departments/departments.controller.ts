import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { Status } from '../../../database/entity/department.entity.js';
import { CreateDepartmentDto, UpdateDepartmentDto } from './departments.dto';
import { DepartmentsService } from './departments.service.js';

@Controller('departments')
export class DepartmentsController {
  private readonly _service: DepartmentsService;

  constructor(departmentService: DepartmentsService) {
    this._service = departmentService;
  }

  @Get()
  async findAll(): Promise<any> {
    return await this._service.getAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this._service.getById(id);
  }

  @Post()
  async create(@Body() createDepartmentDto: CreateDepartmentDto) {
    //todo auth
    return await this._service.store(createDepartmentDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto
  ) {
    //todo auth
    return await this._service.update(id, updateDepartmentDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    //todo auth
    return await this._service.update(
      id,
      { status: Status.NOT_ACTIVE }
    );
  }
}
