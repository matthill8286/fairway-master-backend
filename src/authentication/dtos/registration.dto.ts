import { CreateUsersInput } from 'src/users/dto/create-users.input';

export class RegistrationDto extends CreateUsersInput {
  email: string;
  password: string;
}
