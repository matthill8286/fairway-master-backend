import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateScorecardDto } from './dto/create-scorecard.dto';
import { ScorecardsService } from './scorecards.service';
import { Scorecard } from './interfaces/scorecard.interface';

@Controller('scorecards')
export class ScorecardsController {
  constructor(private readonly catsService: ScorecardsService) {}

  @Post()
  async create(@Body() createScorecardDto: CreateScorecardDto) {
    return this.catsService.create(createScorecardDto);
  }

  @Get()
  async findAll(): Promise<Scorecard[]> {
    return this.catsService.findAll();
  }
}
