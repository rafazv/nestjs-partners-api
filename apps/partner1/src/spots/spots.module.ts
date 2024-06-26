import { Module } from '@nestjs/common';
import { SpotsController } from './spots.controller';
import { SpotsCoreModule } from '@app/core';

@Module({
  controllers: [SpotsController],
  imports: [SpotsCoreModule],
})
export class SpotsModule {}
