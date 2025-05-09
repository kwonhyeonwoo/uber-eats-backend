import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { AccountDto } from './dtos/account.dto';
import { UsersService } from './users.service';
import { LoginDto } from './dtos/login.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post('')
    async post(@Body() body: AccountDto) {
        try {
            const result = await this.userService.account(body);
            return result; // 서비스에서 받은 응답을 클라이언트로 그대로 전달
        } catch (error) {
            console.error('Controller Error:', error);
            return { state: false, msg: '서버에서 오류가 발생했습니다.' };
        }
    }

    @Post('/login')
    async login(@Body() body: LoginDto) {
        try {
            console.log('body', body)
            const result = await this.userService.login(body);
            console.log(result)
            return result;
        } catch (e) {
            return {
                state: false,
                msg: "인터넷 서버 문제입니다."
            }
        }
    }

    @Get('')
    async get() {
        return "hello"
    }
}
