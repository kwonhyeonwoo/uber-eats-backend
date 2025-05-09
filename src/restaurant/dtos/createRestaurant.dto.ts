import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class createRestaurantDto {
    @IsString()
    name: string;

    @IsBoolean()
    @IsOptional()
    isVegan: boolean;

    @IsString()
    address: string;

    @IsString()
    ownersName: string;
}