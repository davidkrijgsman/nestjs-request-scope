import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { FooModule } from 'src/foo/foo.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    context: ({ req }) => {
      console.log('AppModule:context, host:', req.headers['host'])
      return {
        req
      }
    }
  }), FooModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
