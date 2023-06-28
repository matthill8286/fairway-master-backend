import { Test, TestingModule } from '@nestjs/testing';
import { ScorecardsResolver } from './scorecards.resolver';
import { ScorecardsService } from './scorecards.service';

describe('ScorecardsResolver', () => {
  let resolver: ScorecardsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScorecardsResolver, ScorecardsService],
    }).compile();

    resolver = module.get<ScorecardsResolver>(ScorecardsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
