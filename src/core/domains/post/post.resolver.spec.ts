import { Test, TestingModule } from '@nestjs/testing';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';
import { UserService } from '../user/user.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('PostResolver', () => {
  let resolver: PostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostResolver, PostService, UserService, PrismaService],
    }).compile();

    resolver = module.get<PostResolver>(PostResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
