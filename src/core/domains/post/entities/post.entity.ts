import { ObjectType } from '@nestjs/graphql';
import { Post } from '@prisma/client';
import { UserEntity } from '../../user/entities/user.entity';

@ObjectType()
export class PostEntity implements Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  authorId: number;
  author: UserEntity;
}
