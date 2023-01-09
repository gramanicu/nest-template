import { CreateUserInput } from './create-user.input';
import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { UpdateProfileInput } from './update-profile.input';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdateUserInput extends PartialType(
  OmitType(CreateUserInput, ['profile']),
) {
  @ApiProperty({ required: false })
  profile?: UpdateProfileInput;
}
