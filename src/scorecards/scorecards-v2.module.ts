import { Module } from '@nestjs/common';
import { ScorecardsService } from './scorecards.service';
import { ScorecardsResolver } from './scorecards.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { catsProviders } from './scorecards.providers';

@Module({
  imports: [DatabaseModule],
  exports: [ScorecardsService],
  providers: [ScorecardsResolver, ScorecardsService, ...catsProviders],
})
export class ScorecardsModule {}
