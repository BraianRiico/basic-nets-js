import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  exports:      [ CarsService ],
  controllers:  [ CarsController  ],
  providers:    [ CarsService ],
})
export class CarsModule {}
