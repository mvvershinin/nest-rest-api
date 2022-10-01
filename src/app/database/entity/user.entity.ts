import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  BeforeInsert,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

export enum UserType {
  ADMIN = 1,
  DEVELOPER = 2,
  USER = 3,
}

export enum UserStatus {
  NOT_ACTIVE = 0,
  ACTIVE = 1,
}

export enum UserProvider {
  NATIVE = 1,
  GOOGLE = 2,
}

@Entity({
  name: 'users',
})
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @Column()
  email: string;

  @Column({
    select: false,
  })
  password: string;

  @Column()
  type: UserType = UserType.USER;

  @Column()
  status: UserStatus = UserStatus.ACTIVE;
/**
  @Column()
  provider: UserProvider = UserProvider.NATIVE;
*/
  @Column()
  external_id: string;
  /**
  @OneToMany(() => UserOperation, (operation) => operation.user)
  @JoinColumn({ name: 'user_id' })
  operations: UserOperation[];
  */
  @BeforeInsert()
  @BeforeUpdate()
  private encryptPassword(): void {
    if (!this.password) {
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(this.password, salt);

    this.password = hash;
  }

  async passwordCompare(pwd: string): Promise<unknown> {
    return bcrypt.compareSync(pwd, this.password.replace(/^\$2y/, '$2a'));
  }
}
