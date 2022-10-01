import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';

export class CreateDepartmentDto {
  @ApiProperty()
  @MinLength(2)
  @MaxLength(128)
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
  short_name: string;

  @ApiProperty()
  @MinLength(5)
  @MaxLength(254)
  name: string;
}
