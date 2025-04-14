import { Controller, Get } from '@nestjs/common';
import { GreetService } from '../services/greet.service';

@Controller()
export class GreetController {
  constructor(private readonly greetService: GreetService) {}

  @Get('greet')
  getHello(): {} {
    return this.greetService.getHello();
  }
}
