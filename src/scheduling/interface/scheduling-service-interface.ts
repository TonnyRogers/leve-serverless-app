import { CreateSchedulingDto } from '../dto/create-scheduling-dto';
import { CreateSchedulingResponseDto } from '../dto/create-scheduling-response-dto';

export interface ISchedulingService {
  create(dto: CreateSchedulingDto): Promise<CreateSchedulingResponseDto>;
}
