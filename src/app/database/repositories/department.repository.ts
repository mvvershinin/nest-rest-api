import { EntityRepository, FindOneOptions, Repository } from 'typeorm';
import Department from '../entity/department.entity.js';

@EntityRepository(Department)
export default class DepartmentRepository extends Repository<Department> {
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
