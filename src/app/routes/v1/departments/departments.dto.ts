import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength, Validate } from 'class-validator';
import { Unique } from 'typeorm';
import Department, { Status } from '../../../database/entity/department.entity.js';



export class CreateDepartmentDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  @MaxLength(128)
    //todo validate unique
  short_name: string;

  @ApiProperty()
  @MinLength(5)
  @MaxLength(254)
    //todo validate unique
  name: string;
}

export class UpdateDepartmentDto {
  @ApiProperty()
  @MinLength(2)
  @MaxLength(128)
  //@Validate(Unique, [Department, 'short_name'])
    //todo validate unique
  @IsOptional()
  short_name?: string;

  @ApiProperty()
  @MinLength(5)
  @MaxLength(254)
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsOptional()
  status?: Status
}

export class DepartmentDto {
  id: string;
  short_name: string;
  name: string;
}
