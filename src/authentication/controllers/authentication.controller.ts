import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
  PartialType,
} from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';
import { RegistrationDto } from '../dtos/registration.dto';
import { AuthenticationService } from '../services';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('Authentication')
@ApiTags('Authentication')
export class AuthenticationController {
  constructor(private readonly _authenticationService: AuthenticationService) {}

  @Post('registration')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: PartialType(CreateUserDto),
    description: 'Successfully created user',
  })
  @ApiBadRequestResponse({
    description: 'User with that email already exists.',
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async registration(
    @Body() registrationDto: RegistrationDto,
  ): Promise<Partial<User>> {
    return this._authenticationService.registerUser(
      registrationDto.email,
      registrationDto.password,
    );
  }
}
