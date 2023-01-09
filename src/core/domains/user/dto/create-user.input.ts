import { InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateProfileInput {
  @MinLength(1)
  @ApiProperty()
  bio: string;
}

@InputType()
export class CreateUserInput {
  @IsString()
  @MinLength(3)
  @ApiProperty()
  name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty({ required: false })
  profile?: CreateProfileInput;
}
