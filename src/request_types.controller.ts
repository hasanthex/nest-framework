import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('/request/type')
export class RequestTypesController {
  /**
   * get request type
   * request url: http://localhost:3000/request/type/get
   *
   * @returns {string}
   */
  @Get('/get')
  getRequestType() {
    return 'This is "GET" Request.s';
  }

  /**
   * get request type with params
   * request url: http://localhost:3000/request/type/get-with-params/hello world
   *
   * @param {string} title
   * @returns {string}
   */
  @Get('/get-with-params/:title')
  getWithParamsRequestType(@Param('title') title: string) {
    return `This is "GET" Request with id: ${title}`;
  }

  /**
   * post request type
   * request url: http://localhost:3000/request/type/post
   *
   * @returns {string}
   */
  @Post('/post')
  postRequestType() {
    return 'This is "POST" Request.';
  }

  /**
   * put request type
   * request url: http://localhost:3000/request/type/put
   *
   * @returns {string}
   */
  @Put('/put')
  putRequestType() {
    return 'This is "PUT" Request.';
  }

  /**
   * put request type with params
   * request url: http://localhost:3000/request/type/put-with-params/1
   *
   * @param {string} id
   * @returns {string}
   */
  @Put('/put-with-params/:id')
  putWithParamsRequestType(@Param('id') id: string) {
    return `This is "PUT" Request with id: ${id}`;
  }

  /**
   * put request type with params
   * request url: http://localhost:3000/request/type/delete
   *
   * @returns {string}
   */
  @Delete('/delete')
  deleteRequestType() {
    return 'This is "DELETE" Request';
  }

  /**
   * get request with wildcards
   * request url: http://localhost:3000/request/type/get-wildcard/anything
   *
   * @returns {string}
   */
  @Get('/get-wildcard/*')
  wildcardRequest() {
    return 'This is a wildcard request';
  }

  @Get('/details/:id')
  userDetails(@Param() params: Record<string, any>) {
    console.log(params);
    return {
      name: 'Hasan',
      id: 1,
    };
  }
}
