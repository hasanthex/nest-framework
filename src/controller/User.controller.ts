import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from 'src/DTO/create-user.dto';

@Controller('/user')
export class UserController {
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return { message: 'User created successfully', data: createUserDto };
  }
}
