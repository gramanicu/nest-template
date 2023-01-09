import { Module } from '@nestjs/common';
import { PrismaModule } from './core/prisma/prisma.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { DomainsModule } from './core/domains/domains.module';
import { join } from 'path';

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      sortSchema: true,
      debug: true,
      playground: true,
    }),
    DomainsModule,
  ],
})
export class AppModule {}
