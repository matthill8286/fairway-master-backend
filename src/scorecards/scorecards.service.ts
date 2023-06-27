import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateScorecardDto } from './dto/create-scorecard.dto';
import { Scorecard } from './interfaces/scorecard.interface';

@Injectable()
export class ScorecardsService {
  constructor(
    @Inject('SCORECARD_MODEL')
    private readonly scorecardModel: Model<Scorecard>,
  ) {}

  async create(createScorecardDto: CreateScorecardDto): Promise<Scorecard> {
    const createdCat = this.scorecardModel.create(createScorecardDto);
    return createdCat;
  }

  async findAll(): Promise<Scorecard[]> {
    return this.scorecardModel.find().exec();
  }
}
