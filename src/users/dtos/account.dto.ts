import { PickType } from '@nestjs/swagger';
import { UserEntity } from '../entites/user.entity';

export class AccountDto extends PickType(UserEntity, ["email", "password", "role"]) {
}