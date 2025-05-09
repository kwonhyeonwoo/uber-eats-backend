import { PickType } from "@nestjs/swagger";
import { UserEntity } from "../entites/user.entity";

export class LoginDto extends PickType(UserEntity, ['email', 'password']) {

}