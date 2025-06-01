import { Test, TestingModule } from '@nestjs/testing';
import { GreetController } from './greet.controller';
import { GreetService } from '../services/greet.service';

describe('AppController', () => {
  let appController: GreetController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GreetController],
      providers: [GreetService],
    }).compile();

    appController = app.get<GreetController>(GreetController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
