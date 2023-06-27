import { AbstractEntity } from 'src/common/entities';
import { User } from 'src/users/entities/user.entity';

export class AuthenticationEntity extends AbstractEntity {
  public emailAddress: string;
  public password: string;
  public user: User;
}
