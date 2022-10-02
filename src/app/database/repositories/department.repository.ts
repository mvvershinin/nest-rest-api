import { EntityRepository, FindOneOptions, Repository } from 'typeorm';
import Department from '../entity/department.entity';

@EntityRepository(Department)
export default class DepartmentRepository extends Repository<Department> {
  constructor( ) {
    super();
  }
  /*
  async findByName(
    name: string,
    options?: FindOneOptions<Department>,
  ): Promise<Department> {
    const data = await this.findOne();

    return data;
  }
   */
}
