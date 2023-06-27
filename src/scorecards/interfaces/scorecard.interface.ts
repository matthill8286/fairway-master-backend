import { Document } from 'mongoose';

export interface Scorecard extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
