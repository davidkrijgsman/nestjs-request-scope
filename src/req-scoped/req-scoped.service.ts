import { Inject, Injectable, Scope } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';

@Injectable({ scope: Scope.REQUEST })
export class ReqScopedService {
  constructor(@Inject(CONTEXT) private context) { 
    // here this.context should not be undefined!
    console.log('ReqScopedService:constructor', this.context); 
  }
}