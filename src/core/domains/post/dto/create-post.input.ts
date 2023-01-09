import { InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

@InputType()
export class CreatePostInput {
  @IsString()
  @MinLength(3)
  @ApiProperty()
  title: string;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  content: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ required: false })
  published?: boolean;

  @IsInt()
  @ApiProperty()
  authorId: number;
}
