import { Document } from 'mongoose';

export interface User extends Document {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly age: number;
  readonly password: string;
  readonly email: string;
  readonly username: string;
  readonly userId: string;
}
