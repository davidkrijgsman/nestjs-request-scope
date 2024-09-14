import { Module } from '@nestjs/common';
import { FooResolver } from './foo.resolver';
import { ReqScopedService } from '../req-scoped/req-scoped.service';
import { FooService } from './foo.service';
import { ReqScopedModule } from '../req-scoped/req-scoped.module';

@Module({
  imports: [ReqScopedModule],
  providers: [FooResolver, FooService, ReqScopedService],
})
export class FooModule {}