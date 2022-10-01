import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';


export enum Status {
  NOT_ACTIVE = 0,
  ACTIVE = 1,
}

@Entity({
  name: 'departments',
})
export default class Department {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @Column()
  status: Status = Status.ACTIVE;

  @Column({unique: true})
  name: string;

  @Column({unique: true})
  short_name: string;

  /**
  @OneToMany(() => UserOperation, (operation) => operation.user)
  @JoinColumn({ name: 'user_id' })
  operations: UserOperation[];
  */
}
