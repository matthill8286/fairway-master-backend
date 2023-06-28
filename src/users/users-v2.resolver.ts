import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUsersInput } from './dto/create-users.input';
import { UpdateUsersInput } from './dto/update-users.input';
import { User, Users } from './entities/users.entity';

@Resolver('Users')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  create(@Args('createUsersInput') createUsersInput: CreateUsersInput) {
    return this.usersService.create(createUsersInput);
  }

  @Query(() => Users)
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  findOne(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  update(@Args('updateUsersInput') updateUsersInput: UpdateUsersInput) {
    return this.usersService.update(updateUsersInput.id, updateUsersInput);
  }

  @Mutation(() => null)
  remove(@Args('id') id: number) {
    return this.usersService.remove(id);
  }
}
