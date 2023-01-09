import { MinLength } from 'class-validator';
import { InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdateProfileInput {
  @MinLength(1)
  @ApiProperty()
  bio: string;
}
