import { PartialType } from '@nestjs/mapped-types';
import { CreateSseDto } from './create-sse.dto';

export class UpdateSseDto extends PartialType(CreateSseDto) {}
