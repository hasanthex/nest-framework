import { Module } from '@nestjs/common';
import { RequestTypesController } from './request_types.controller';
import { UserController } from './controller/User.controller';

@Module({
  controllers: [RequestTypesController, UserController],
})
export class AppModule {}
