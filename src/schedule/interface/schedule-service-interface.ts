import { GetSchedulesQueryDto } from '../dto/get-schedules-query-dto';
import { GetSchedulesResponseDto } from '../dto/get-schedules-response-dto';

export interface IScheduleService {
  listSchedules(query: GetSchedulesQueryDto): Promise<GetSchedulesResponseDto>;
}
