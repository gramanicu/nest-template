import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { PrismaModule } from '../../prisma/prisma.module';
import { UserService } from '../user/user.service';

@Module({
  providers: [PostResolver, PostService, UserService],
  imports: [PrismaModule],
})
export class PostModule {}
