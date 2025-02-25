import { Controller, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('/response/modified')
export class ResponseModifiedController {
  /**
   * get request type
   * request url: http://localhost:3000/response/modified/create
   *
   * @returns {string}
   */
  @Post('/create')
  createResponse(@Res() res: Response) {
    console.log(res);
    res.status(HttpStatus.CREATED).send({ message: 'Response created' });
  }

  /**
   * get request type
   * request url: http://localhost:3000/response/modified/ok
   *
   * @returns {string}
   */
  @Post('/ok')
  okResponse(@Res() res: Response) {
    res.status(HttpStatus.OK).send({ message: 'Response OK' });
  }
}
