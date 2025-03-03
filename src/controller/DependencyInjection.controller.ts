import {
  Controller,
  Post,
  Get,
  Put,
  Param,
  Delete,
  Query,
  Inject,
} from '@nestjs/common';
import { CreateUserDto } from '../DTO/create-user.dto';
import { UserStore } from 'src/store/User.store';

@Controller('/dependency-injection')
export class DependencyInjectionController {
  constructor(
    private store: UserStore,
    @Inject('DATABASE_NAME') private readonly dbName: string,
  ) {}

  @Post('/create')
  createUser(@Query() query: CreateUserDto): { message: string; data?: any } {
    console.log(query, this.dbName);
    this.store.addUser(query);
    const userList = this.store.getAllUsers();
    return { message: 'User created successfully', data: userList };
  }

  @Get('/get/:id')
  getExistingUser(@Param('id') id: number): { message: string; data?: any } {
    const user = this.store.getUser(id);
    if (!user) {
      return { message: 'User not found' };
    }
    return { message: 'User found', data: user };
  }

  @Put('/update/:id')
  updateUser(
    @Query() query: CreateUserDto,
    @Param('id') id: number,
  ): { message: string; data?: any } {
    this.store.updateUser(id, query);
    const userList = this.store.getAllUsers();
    return { message: 'User updated successfully', data: userList };
  }

  @Delete('/delete/:id')
  removeUser(@Param('id') id: number): { message: string; data?: any } {
    const message = this.store.removeUser(id);
    const userList = this.store.getAllUsers();
    return { message, data: userList };
  }
}
