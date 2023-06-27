import { Mongoose } from 'mongoose';
import { ScorecardSchema } from './schemas/scorecard.schema';

export const catsProviders = [
  {
    provide: 'SCORECARD_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Scorecard', ScorecardSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
