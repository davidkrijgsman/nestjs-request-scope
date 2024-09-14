import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { Foo } from './foo.model';
import { ReqScopedService } from '../req-scoped/req-scoped.service';

@Injectable()
export class FooService {
  constructor(
    private readonly moduleRef: ModuleRef,
  ) {}

  async getFoo(): Promise<Foo> {
    console.log('getFoo')
    const reqScopedService = await this.moduleRef.resolve(ReqScopedService)
    return new Foo();
  }
}
