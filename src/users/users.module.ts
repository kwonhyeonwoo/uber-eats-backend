import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entites/user.entity';
import { UsersController } from './users.controller';
import { UserRepository } from './user.repository';

@Module({
    imports:[TypeOrmModule.forFeature([UserEntity])],
    providers: [UsersService,UserRepository],
    controllers: [UsersController,]
})
export class UsersModule {}
