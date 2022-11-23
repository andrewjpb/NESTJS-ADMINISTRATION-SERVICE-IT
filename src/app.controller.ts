import { Controller, Get } from '@nestjs/common';
import { AppService, returnProps } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): returnProps {
    return this.appService.getHello();
  }
}
