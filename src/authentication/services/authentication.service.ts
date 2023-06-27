import { Body, Injectable, Post } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthenticationService {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async registerUser(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<User | any> {
    try {
      const user = await this.usersService.registerUser(email, password);
      return { message: 'User registered successfully', user };
    } catch (error) {
      // Handle any errors that occur during registration
      return { message: 'Failed to register user', error: error.message };
    }
  }
}
