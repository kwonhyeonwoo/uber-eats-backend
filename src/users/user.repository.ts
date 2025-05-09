import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { UserEntity } from "./entites/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { AccountDto } from "./dtos/account.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepo: Repository<UserEntity>,
    ) { }

    findOne(id: number) {

    };

    async finduser(email: string) {
        try {
            const user = await this.userRepo.findOne({ where: { email } });
            return user;
        } catch (e) {
            return e
        }
    }

    async findByEmail(email: string): Promise<boolean> {
        const exist = await this.userRepo.findOne({ where: { email } });
        return !!exist;
    }

    async create(body: AccountDto) {
        const newUser = this.userRepo.create(body);
        return await this.userRepo.save(newUser);
    }

    async checkPassword(email: string, password: string) {
        try {
            const user = await this.userRepo.findOne({ where: { email } });
            const check = await bcrypt.compare(password, user.password);
            console.log('passsword check', check)
            return check;
        } catch (e) {
            return e;
        }
    }
}