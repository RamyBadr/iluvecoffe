import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';
//TODO: remove unused endpoints
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @HttpCode(200)
  @Post('test')
  testEndpoint() {
    return { test: true };
  }
}
