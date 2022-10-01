import { UserType } from '../../database/entity/user.entity';

export interface JwtPayload {
  id: string;
  type: UserType;
}
