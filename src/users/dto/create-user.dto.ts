export class CreateUserDto {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly age?: number;
  readonly email: string;
  readonly password: string;
}
