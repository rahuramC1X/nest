import { IsString, IsEmail, IsNotEmpty} from 'class-validator'


export class loginUserDto{
    @IsEmail()
    username: string;

    @IsString()
    password: string;
}