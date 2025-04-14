import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetService {
  getHello(): {} {
    return {
      greet: 'Hello World!'
    };
  }
}
