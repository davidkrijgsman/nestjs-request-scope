import { Module } from "@nestjs/common";
import { ReqScopedService } from "./req-scoped.service";

@Module({
    imports: [],
    providers: [ReqScopedService],
    exports: [ReqScopedService],
})
export class ReqScopedModule {}