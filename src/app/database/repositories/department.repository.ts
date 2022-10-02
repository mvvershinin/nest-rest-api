import { EntityRepository, FindOneOptions, Repository } from 'typeorm';
import Department from '../entity/department.entity';

@EntityRepository(Department)
export default class DepartmentRepository extends Repository<Department> {
  constructor( ) {
    super();
  }
}
