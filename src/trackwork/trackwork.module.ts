import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trackwork } from './trackwork.entity';
import { TrackworkService } from './trackwork.service';
import { TrackworkController } from './trackwork.controller';
import { UserModule } from 'src/users/user.module';

@Module({
  imports: [
    // Use forFeature correctly here
    TypeOrmModule.forFeature([Trackwork]),
    UserModule
  ],
  providers: [TrackworkService],
  controllers: [TrackworkController],
  exports: [TrackworkService]
})
export class TrackworkModule {}
