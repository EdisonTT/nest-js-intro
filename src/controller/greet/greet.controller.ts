import { Controller, Get, Query } from '@nestjs/common';
import { GreetResponse } from 'src/interface.ts';
import { GreetService } from 'src/services';

@Controller('greet')
export class GreetController {
  constructor(private readonly greetService: GreetService) {}

  @Get('say-hello')
  getHello(): GreetResponse {
    return this.greetService.getHello();
  }

  @Get('delayed-hello')
  async getDelayedHello(
    @Query('delayTime') delayTime: string, // Default to 2000ms if not provided,
  ): Promise<GreetResponse> {
    return this.greetService.getDelayedHello(delayTime);
  }

  @Get('load-cpu')
  simulateCpuLoad(@Query('loadTime') loadTime: string) {
    return this.greetService.loadCpu(loadTime);
  }

  @Get('crash-app')
  crashApp() {
    process.exit(1); // This will crash the application
    // Note: In a real-world application, you would handle this more gracefully.
  }
}
