
  //imports: [AuthModule,UserModule],
  import { Module } from '@nestjs/common';
  import { AuthService } from './auth/auth.service';
  import { UserService } from './users/user.service'; // Import UserService
  import { JwtService } from '@nestjs/jwt'; // Import JwtService
  import { AuthModule } from './auth/auth.module';
  import { UserModule } from './users/user.module';
  import { TrackworkModule } from './trackwork/trackwork.module';
import { DesignPatternModule } from './design-patterns/designpattern.module';
import { TrackworkService } from './trackwork/trackwork.service';
import { DesignPatternService } from './design-patterns/designpattern.service';

  
  @Module({
    imports: [AuthModule,UserModule, TrackworkModule, DesignPatternModule], // Include any relevant modules here
    providers: [AuthService, UserService, JwtService, TrackworkService, DesignPatternService], // Include UserService and JwtService as providers
  })
  export class AppModule {}
  
