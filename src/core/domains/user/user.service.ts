import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    if (createUserInput.profile) {
      return this.prisma.user.create({
        data: {
          email: createUserInput.email,
          name: createUserInput.name,
          profile: {
            create: createUserInput.profile,
          },
        },
      });
    }
    return this.prisma.user.create({
      data: {
        email: createUserInput.email,
        name: createUserInput.name,
      },
    });
  }

  findAll(where: Prisma.UserWhereInput) {
    return this.prisma.user.findMany({ where });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: { id },
      data: {
        email: updateUserInput.email,
        name: updateUserInput.name,
        profile: updateUserInput.profile && {
          upsert: {
            create: {
              bio: updateUserInput.profile.bio,
            },
            update: {
              bio: updateUserInput.profile.bio,
            },
          },
        },
      },
    });
  }

  updateProfile(id: number, updateProfileInput: UpdateProfileInput) {
    return this.prisma.profile.update({
      where: { id },
      data: {
        bio: updateProfileInput.bio,
      },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
