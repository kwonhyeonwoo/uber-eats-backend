import { IsNumber } from 'class-validator';
import { createRestaurantDto } from './createRestaurant.dto';

export class UpdateRestaurantDto extends createRestaurantDto {
    @IsNumber()
    id: number;
}