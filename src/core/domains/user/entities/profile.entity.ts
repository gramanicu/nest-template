import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Profile } from '@prisma/client';
import { UserEntity } from './user.entity';

@ObjectType()
export class ProfileEntity implements Profile {
  @Field(() => ID)
  id: number;
  bio: string;
  userId: number;
  user: UserEntity;
}
