import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { createRestaurantDto } from './dtos/createRestaurant.dto';
import { UpdateRestaurantDto } from './dtos/updateRestaurant.dto';

@Controller()
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}
  @Post('/create')
  async create(@Body() body: createRestaurantDto) {
    try {
      await this.restaurantService.create(body);
      return true;
    } catch (err) {
      console.log(err);
    }
  }

  @Put('/update')
  async update(@Body() body: UpdateRestaurantDto) {
    await this.restaurantService.update(body);
    return true;
  }

  @Get()
  getAll() {
    return 'hello';
  }
}
