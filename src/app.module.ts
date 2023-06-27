import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ScorecardsModule } from './scorecards/scorecards.module';
import { AuthModule } from './auth/auth.module';
import { AuthenticationModule } from './authentication';
import { LoggerService } from './logger/logger.service';

@Module({
  imports: [AuthModule, ScorecardsModule, UsersModule, AuthenticationModule],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
