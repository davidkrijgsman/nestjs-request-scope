import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Foo {
  constructor() {
    this.bar = 'bar'
  }

  @Field(type => String)
  bar: string;
}