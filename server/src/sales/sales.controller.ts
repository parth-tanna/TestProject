import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UseRoles } from 'nest-access-control';
import { JwtAuthGuard } from '../auth/jwt/jwtAuth.guard';
import { AclValidateRequestInterceptor } from '../interceptors/aclValidateRequest.interceptor';
import { SalesCreationDto } from './dto/sales-creation.dto';
import { SalesService } from './sales.service';
import { Sales } from './types/sales';
import * as nestAccessControl from 'nest-access-control';

@Controller('sales')
export class SalesController {
  constructor(
    private readonly salesService: SalesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: 'Sales',
    action: 'create',
    possession: 'any',
  })
  @Post()
  async createSales(@Body() body: SalesCreationDto): Promise<Sales> {
    return await this.salesService.create(body);
  }
}
