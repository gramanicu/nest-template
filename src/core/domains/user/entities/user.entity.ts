import { ObjectType } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { ProfileEntity } from './profile.entity';
import { PostEntity } from '../../post/entities/post.entity';

@ObjectType()
export class UserEntity implements User {
  id: number;
  email: string;
  name: string;
  profile?: ProfileEntity;
  profileId?: number;
  posts: PostEntity[];
}
