import { Module } from '@nestjs/common';
import { RolesBuilder } from 'nest-access-control';
import { ACLModule } from '../auth/acl.module';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';

@Module({
  imports: [ACLModule],
  controllers: [SalesController],
  providers: [SalesService, RolesBuilder],
})
export class SalesModule {}
