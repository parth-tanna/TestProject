import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SalesCreationDto {
  @IsNotEmpty()
  @IsString()
  customerId!: string;

  @IsNotEmpty()
  @IsString()
  orderId!: string;

  @IsNotEmpty()
  @IsString()
  productId!: string;

  @IsNotEmpty()
  @IsNumber()
  salePrice!: number;
}
