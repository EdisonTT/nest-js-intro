import { Module } from '@nestjs/common';
import { GreetController } from './controller';
import { GreetService } from './services';

@Module({
  imports: [],
  controllers: [GreetController],
  providers: [GreetService],
})
export class AppModule {}
