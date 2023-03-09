import { Controller, Get, Sse } from '@nestjs/common';
import { interval, map, Observable, } from 'rxjs';
import { AppService } from './app.service';

interface messageEvent {
  data: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Sse('event')
  sendEvent(): Observable<messageEvent> {
    return interval(1000).pipe(map((num) => ({
      data: 'hello world' + num,
    })))
  }
}
