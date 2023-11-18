import { IsDateString, IsString } from 'class-validator';

export class TrackworkDto {
  @IsDateString()
  date: Date;

  @IsString()
  topic: string;

  @IsString()
  subtopic: string;

  @IsString()
  explanation: string;

  @IsString()
  provider: string;

  @IsString()
  rootCause: string;
}

