import { Test, TestingModule } from '@nestjs/testing';
import { NestGenerateControllerRestaurantController } from './nest-generate-controller-restaurant.controller';

describe('NestGenerateControllerRestaurantController', () => {
  let controller: NestGenerateControllerRestaurantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NestGenerateControllerRestaurantController],
    }).compile();

    controller = module.get<NestGenerateControllerRestaurantController>(NestGenerateControllerRestaurantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
