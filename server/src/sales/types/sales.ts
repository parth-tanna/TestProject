import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Sales {
  @IsNotEmpty()
  @IsString()
  id!: string;

  @IsNotEmpty()
  @IsString()
  productId!: string;

  @IsNotEmpty()
  @IsString()
  customerId!: string;

  @IsNotEmpty()
  @IsString()
  orderId!: string;

  @IsNotEmpty()
  @IsNumber()
  salePrice!: number;

  @IsNotEmpty()
  @IsDate()
  createdAt!: Date;
}
