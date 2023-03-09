import { Module } from '@nestjs/common';
import { SseService } from './sse.service';
import { SseController } from './sse.controller';

@Module({
  controllers: [SseController],
  providers: [SseService]
})
export class SseModule {}
