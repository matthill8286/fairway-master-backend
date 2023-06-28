import { Document } from 'mongoose';

export interface Scorecard extends Document {
  readonly name: string;
  readonly date: Date;
  readonly course: number;
  readonly hole: string;
}
