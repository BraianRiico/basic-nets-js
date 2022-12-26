import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';

@Module({
  exports:      [ BrandsService ],      
  controllers:  [ BrandsController ],
  providers:    [ BrandsService ]
})
export class BrandsModule {}
