import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy';
import { UserService } from 'src/users/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        JwtModule.register({
            secret:'a',
            signOptions: {expiresIn: '1h'},
        }),
        TypeOrmModule.forFeature([User])
        // TypeOrmModule.forRoot({
        //     // TypeORM connection options
        //     type: 'mysql',
        //     host: 'localhost',
        //     port: 3306,
        //     username: 'user',
        //     password: 'password',
        //     database: 'mydb',
        //     entities: [/* your entity classes */],
        //     synchronize: true,
        //   }), // Use forFeature correctly here

    ],
    providers: [AuthService,JwtStrategy,UserService],
    controllers: [AuthController],
    exports: [JwtModule]
})
export class AuthModule{}