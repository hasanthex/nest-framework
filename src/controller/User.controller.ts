import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CreateUserDto } from 'src/DTO/create-user.dto';

@Controller('/user')
export class UserController {
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return { message: 'User created successfully', data: createUserDto };
  }

  @Get('/query-params')
  createByQuery(@Query() query: CreateUserDto) {
    console.log(query);
    return { message: 'User created successfully', data: query };
  }
}
