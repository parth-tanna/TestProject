import { Injectable } from '@nestjs/common';
import { Sales } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { SalesCreationDto } from './dto/sales-creation.dto';

@Injectable()
export class SalesService {
  constructor(protected readonly prisma: PrismaService) {}
  async create(body: SalesCreationDto): Promise<Sales> {
    const sale = await this.prisma.sales.create({
      data: {
        order: { connect: { id: body.orderId } },
        customer: { connect: { id: body.customerId } },
        product: { connect: { id: body.productId } },
        salePrice: body.salePrice,
      },
    });
    return sale;
  }
}
