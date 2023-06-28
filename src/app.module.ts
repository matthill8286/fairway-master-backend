import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
// import { ScorecardsModule } from './scorecards/scorecards.module';
import { AuthModule } from './auth/auth.module';
import { AuthenticationModule } from './authentication';
import { LoggerService } from './logger/logger.service';
import { ScorecardsModule } from './scorecards/scorecards.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    AuthenticationModule,
    ScorecardsModule,
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './**/*.grapql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
