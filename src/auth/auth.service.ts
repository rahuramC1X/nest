import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../users/user.service'

@Injectable()
export class AuthService{
    constructor(
        private userService: UserService,
        private jwtService:JwtService

    ){}
    async validateUser(email: string,password: string): Promise<any> {
        const user = await this.userService.findByEmail(email);
        console.log("User", user)
        console.log("User.password", user.password)
        console.log("Password", password)
        if(user && user.password === password){
            return user;
        }
        return null;
    }
    async login(user){
        const payload = { sub:user.id, email: user.email};
        return {
            Success: true,
            access_token: this.jwtService.sign(payload)
        }

    }
    
}

