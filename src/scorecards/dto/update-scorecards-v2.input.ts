import { CreateScorecardsInput } from './create-scorecards.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateScorecardsInput extends PartialType(CreateScorecardsInput) {
  id: number;
}
