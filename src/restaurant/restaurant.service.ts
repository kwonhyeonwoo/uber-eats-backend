import { Body, Injectable } from '@nestjs/common';
import { RestaurantEntity } from './entites/Restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createRestaurantDto } from './dtos/createRestaurant.dto';
import { UpdateRestaurantDto } from './dtos/updateRestaurant.dto';

@Injectable()
export class RestaurantService {
    constructor(
        @InjectRepository(RestaurantEntity)
        private readonly restaurants: Repository<RestaurantEntity>,
    ) { }

    getAll(): Promise<RestaurantEntity[]> {
        return this.restaurants.find();
    }

    create(@Body() body: createRestaurantDto) {
        const newRestaurant = this.restaurants.create(body);
        return this.restaurants.save(newRestaurant)
    }

    update(@Body() body: UpdateRestaurantDto) {
        console.log('update', body)
        return this.restaurants.save(body)
    }
}
