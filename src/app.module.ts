import { Module } from '@nestjs/common';
import { RequestTypesController } from './request_types.controller';
import { UserController } from './controller/User.controller';
import { ResponseModifiedController } from './controller/ResponseModified.controller';

@Module({
  controllers: [
    RequestTypesController,
    UserController,
    ResponseModifiedController,
  ],
})
export class AppModule {}
