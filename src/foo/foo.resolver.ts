import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Foo } from 'src/foo/foo.model';
import { FooService } from 'src/foo/foo.service';

@Resolver(of => Foo)
export class FooResolver {
  constructor(private fooService: FooService) {}

  @Query(returns => Foo)
  foo(): Promise<Foo> {
    return this.fooService.getFoo()
  }
}