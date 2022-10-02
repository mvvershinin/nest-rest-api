import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength, Validate } from 'class-validator';
import { Unique } from 'typeorm';
import Department from '../../../database/entity/department.entity.js';



export class CreateDepartmentDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  @MaxLength(128)
  //@Validate(Unique, [Department])
    //todo validate unique
  short_name: string;

  @ApiProperty()
  @MinLength(5)
  @MaxLength(254)
  name: string;
}

export class UpdateDepartmentDto {
  @ApiProperty()
  @MinLength(2)
  @MaxLength(128)
  //@Validate(Unique, [Department, 'short_name'])
    //todo validate unique
  short_name: string;

  @ApiProperty()
  @MinLength(5)
  @MaxLength(254)
  name: string;
}

export class DepartmentDto {
  id: string;
  short_name: string;
  name: string;
}
