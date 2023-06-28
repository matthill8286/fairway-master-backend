import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ScorecardsService } from './scorecards.service';
import { CreateScorecardsInput } from './dto/create-scorecards.input';
import { UpdateScorecardsInput } from './dto/update-scorecards.input';

@Resolver('Scorecards')
export class ScorecardsResolver {
  constructor(private readonly scorecardsService: ScorecardsService) {}

  @Mutation(() => null)
  create(
    @Args('createScorecardsInput')
    createScorecardsInput: CreateScorecardsInput,
  ) {
    return this.scorecardsService.create(createScorecardsInput);
  }

  @Query('scorecards')
  findAll() {
    return this.scorecardsService.findAll();
  }

  @Query('scorecards')
  findOne(@Args('id') id: number) {
    return this.scorecardsService.findOne(id);
  }

  @Mutation(() => null)
  update(
    @Args('updateScorecardsInput')
    updateScorecardsInput: UpdateScorecardsInput,
  ) {
    return this.scorecardsService.update(
      updateScorecardsInput.id,
      updateScorecardsInput,
    );
  }

  @Mutation(() => null)
  remove(@Args('id') id: number) {
    return this.scorecardsService.remove(id);
  }
}
