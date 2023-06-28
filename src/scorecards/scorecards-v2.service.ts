import { Inject, Injectable } from '@nestjs/common';
import { CreateScorecardsInput } from './dto/create-scorecards.input';
import { UpdateScorecardsInput } from './dto/update-scorecards.input';
import { Model } from 'mongoose';
import { Scorecard } from './entities/scorecards.entity';

@Injectable()
export class ScorecardsService {
  constructor(
    @Inject('SCORECARD_MODEL')
    private readonly scorecardModel: Model<Scorecard>,
  ) {}
  create(createScorecardsInput: CreateScorecardsInput) {
    const createdScorecard = this.scorecardModel.create(createScorecardsInput);
    return createdScorecard;
  }

  findAll() {
    return `This action returns all scorecards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scorecards`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateScorecardsInput: UpdateScorecardsInput) {
    return `This action updates a #${id} scorecards`;
  }

  remove(id: number) {
    return `This action removes a #${id} scorecards`;
  }
}
