import { Injectable } from '@nestjs/common';
import { CreateSseDto } from './dto/create-sse.dto';
import { UpdateSseDto } from './dto/update-sse.dto';

@Injectable()
export class SseService {
  create(createSseDto: CreateSseDto) {
    return 'This action adds a new sse';
  }

  findAll() {
    return `This action returns all sse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sse`;
  }

  update(id: number, updateSseDto: UpdateSseDto) {
    return `This action updates a #${id} sse`;
  }

  remove(id: number) {
    return `This action removes a #${id} sse`;
  }
}
