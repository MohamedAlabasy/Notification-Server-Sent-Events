import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SseService } from './sse.service';
import { CreateSseDto } from './dto/create-sse.dto';
import { UpdateSseDto } from './dto/update-sse.dto';

@Controller('sse')
export class SseController {
  constructor(private readonly sseService: SseService) {}

  @Post()
  create(@Body() createSseDto: CreateSseDto) {
    return this.sseService.create(createSseDto);
  }

  @Get()
  findAll() {
    return this.sseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSseDto: UpdateSseDto) {
    return this.sseService.update(+id, updateSseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sseService.remove(+id);
  }
}
