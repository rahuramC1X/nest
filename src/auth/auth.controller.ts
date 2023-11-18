import { Controller, Post ,Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { loginUserDto } from "./login.dto";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService:AuthService
    ){}

    @Post('login')
    async login(@Body() loginUserDto){
        const user = await this.authService.validateUser(loginUserDto.email,loginUserDto.password);
        if(user){
            const token = await this.authService.login(user);
            return { access_token: token };
        }
        else{
            return { message: 'Invalid credentials'};
        }
    }

}
