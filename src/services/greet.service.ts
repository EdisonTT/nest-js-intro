import { Injectable } from '@nestjs/common';
import { GreetResponse } from 'src/interface.ts';

@Injectable()
export class GreetService {
  public getHello(): GreetResponse {
    return {
      message: 'Hello World!',
    };
  }

  public async getDelayedHello(
    delayTime: string = '2000',
  ): Promise<GreetResponse> {
    const delay = +delayTime || 2000; // Default to 2000ms if not provided or invalid
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          message: `Hello World! Delayed by ${delay} milliseconds`,
        });
      }, delay);
    });
  }

  public loadCpu(loadTime: string): GreetResponse {
    const delay = +loadTime || 2000;
    const start = Date.now();
    while (Date.now() - start < delay) {
      Math.sqrt(Math.random() * 1000);
    }
    return { message: `Finished CPU work after ${delay} milliseconds` };
  }
}
