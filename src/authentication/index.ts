import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthenticationController } from './controllers';
import { AuthenticationService } from './services';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [UsersModule, DatabaseModule],
  providers: [AuthenticationService],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
