import { Module } from '@nestjs/common';
import { ScorecardsController } from './scorecards.controller';
import { ScorecardsService } from './scorecards.service';
import { catsProviders } from './scorecards.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [ScorecardsService],
  controllers: [ScorecardsController],
  providers: [ScorecardsService, ...catsProviders],
})
export class ScorecardsModule {}
