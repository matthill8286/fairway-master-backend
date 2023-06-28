import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUsersInput } from './dto/create-users.input';
import { UpdateUsersInput } from './dto/update-users.input';
import { User } from './entities/users.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}
  async create(
    createUserDto: CreateUsersInput,
  ): Promise<User | BadRequestException> {
    try {
      const createdUser = this.userModel.create(createUserDto);
      return (await createdUser).save();
    } catch (error) {
      throw new BadRequestException('Failed to create user');
    }
  }

  async registerUser(username: string, password: string): Promise<User> {
    try {
      const user = new this.userModel({ username, password });
      return await user.save();
    } catch (error) {
      // Handle any errors that occur during registration
      throw new Error('Failed to register user');
    }
  }

  async findAll(): Promise<User[] | BadRequestException> {
    try {
      const findUsers = this.userModel.find().exec();
      return findUsers;
    } catch (error) {
      throw new BadRequestException('Failed to fetch users');
    }
  }

  findOne(id: number): Promise<User> {
    try {
      const findUser = this.userModel.findOne({ id }).exec();
      return findUser;
    } catch (error) {
      throw new BadRequestException(`Failed to fetch user ${id}`);
    }
  }

  update(id: number, updateUserDto: UpdateUsersInput) {
    try {
      const findUser = this.userModel.updateOne({ id }, updateUserDto);
      return findUser;
    } catch (error) {
      throw new BadRequestException(`Failed to fetch user ${id}`);
    }
  }

  remove(id: number) {
    try {
      const findUser = this.userModel.deleteOne({ id }).exec();
      return findUser;
    } catch (error) {
      throw new BadRequestException(`Failed to fetch user ${id}`);
    }
  }
}
