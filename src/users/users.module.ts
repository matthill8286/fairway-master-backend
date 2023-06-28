import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { usersProviders } from 'src/users/users.providers';

@Module({
  imports: [DatabaseModule],
  exports: [UsersService],
  providers: [UsersResolver, UsersService, ...usersProviders],
})
export class UsersModule {}
