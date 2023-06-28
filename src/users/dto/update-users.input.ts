import { CreateUsersInput } from './create-users.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUsersInput extends PartialType(CreateUsersInput) {
  id: number;
}
