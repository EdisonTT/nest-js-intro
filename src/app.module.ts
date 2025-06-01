import { Module } from '@nestjs/common';
import { GreetController, HealthController } from './controller';
import { GreetService } from './services';

@Module({
  imports: [],
  controllers: [HealthController, GreetController],
  providers: [GreetService],
})
export class AppModule {}
