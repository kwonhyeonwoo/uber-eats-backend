import { Body, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { AccountDto } from './dtos/account.dto';
import { LoginDto } from './dtos/login.dto';
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken"

@Injectable()
export class UsersService {
    constructor(
        private readonly userRepository: UserRepository,
    ) { }

    async account(@Body() body: AccountDto) {
        try {
            const { email, password, role } = body;

            const exist = await this.userRepository.findByEmail(email);
            const hashPassword = await bcrypt.hash(password, 10)
            if (exist) {
                console.log('이미 존재한 이메일입니다.');
                return {
                    state: false,
                    msg: '이미 존재한 이메일 입니다.',
                };
            }
            const user = await this.userRepository.create({ email, password: hashPassword, role });
            return {
                state: true,
                msg: '회원가입 성공',
                data: user,
            };
        } catch (e) {
            console.log('Error:', e);
            return {
                state: false,
                msg: '서버 오류 발생',
            };
        }
    }

    async login(@Body() body: LoginDto) {
        try {
            const { email, password } = body;
            const existEmail = await this.userRepository.findByEmail(email);
            const checkPW = await this.userRepository.checkPassword(email, password);
            const user = await this.userRepository.finduser(email);
            const token = jwt.sign({ id: user.email }, process.env.SECRET_KEY)
            if (!existEmail) {
                return {
                    state: false,
                    msg: "존재하지 않는 이메일 입니다."
                }
            }
            if (!checkPW) {
                return {
                    state: false,
                    msg: "비밀번호가 올바르지 않습니다"
                }
            }

            return {
                state: true,
                msg: "로그인 성공"
            }

        } catch (e) {

        }
    }
}
