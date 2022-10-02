import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from '../../../database/entity/department.entity.js';
import DepartmentRepository from '../../../database/repositories/department.repository';
import { CreateDepartmentDto, DepartmentDto, UpdateDepartmentDto } from './departments.dto.js';

@Injectable()
export class DepartmentsService {
  private readonly _repository: DepartmentRepository;

  constructor(@InjectRepository(DepartmentRepository) departmentRepository: DepartmentRepository, ) {

    this._repository = departmentRepository;
  }

  async getAll(){
    return await this._repository.find({status: Status.ACTIVE});
  }

  async getById(id: string): Promise<any> {
    const data =  await this._repository.findOne(id);
    return data
  }

  async store(data: CreateDepartmentDto): Promise<DepartmentDto> {
    const newDepartment = await this._repository.create({
      ...data,
    });
    //todo return via dto
    return await this._repository.save(newDepartment);
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<any> {
    //todo catch and return 404
    const department = await this._repository.findOneOrFail(id);

    //todo return via dto
    return await this._repository.update({id: id}, updateDepartmentDto);
  }
}
