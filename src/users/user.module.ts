import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { AuthController } from 'src/auth/auth.controller';
import { Trackwork } from 'src/trackwork/trackwork.entity';
import { DesignPatterns } from 'src/design-patterns/designpattern.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // TypeORM connection options
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ashoka@2500',
      database: 'user',
      entities: [__dirname + '/../**/*.entity.{ts,js}'] ,
      synchronize: true,
    }),
    // Use forFeature correctly here
    TypeOrmModule.forFeature([User,Trackwork, DesignPatterns])
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService,TypeOrmModule.forFeature([User])]
})
export class UserModule {}

