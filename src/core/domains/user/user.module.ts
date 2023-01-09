import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { PostService } from '../post/post.service';

@Module({
  providers: [UserResolver, UserService, PostService],
  imports: [PrismaModule],
})
export class UserModule {}
