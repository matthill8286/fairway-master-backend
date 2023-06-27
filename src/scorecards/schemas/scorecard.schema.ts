import * as mongoose from 'mongoose';

export const ScorecardSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
