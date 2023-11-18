import { Controller, Post, Body, } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity'



@Controller('users')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Post('register')
    async register(@Body() createUserDto:User): Promise<User>{
        return await this.userService.create(createUserDto)
    }

    
}

