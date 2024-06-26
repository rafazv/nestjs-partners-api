import { Module } from '@nestjs/common';
import { EventsCoreModule } from '@app/core/events/events-core.module';
import { EventsController } from './events.controller';

@Module({
  controllers: [EventsController],
  imports: [EventsCoreModule],
})
export class EventsModule {}
