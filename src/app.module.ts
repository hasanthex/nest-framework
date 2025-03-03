import { Module } from '@nestjs/common';
import { RequestTypesController } from './request_types.controller';
import { UserController } from './controller/User.controller';
import { ResponseModifiedController } from './controller/ResponseModified.controller';
import { DependencyInjectionController } from './controller/DependencyInjection.controller';
import { UserStore } from './store/User.store';

@Module({
  controllers: [
    RequestTypesController,
    UserController,
    ResponseModifiedController,
    DependencyInjectionController,
  ],
  providers: [
    { provide: UserStore, useClass: UserStore },
    { provide: 'DATABASE_NAME', useValue: 'nest_DB' },
  ],
})
export class AppModule {}
