import { injectable } from 'tsyringe';
import { GetSchedulesQueryDto } from '../dto/get-schedules-query-dto';
import { GetSchedulesResponseDto } from '../dto/get-schedules-response-dto';
import { IScheduleService } from '../interface/schedule-service-interface';
import { schedulesMock } from '../mocks/schedule-list-mock';

@injectable()
export class ScheduleService implements IScheduleService {
  constructor() {}

  async listSchedules(
    query: GetSchedulesQueryDto,
  ): Promise<GetSchedulesResponseDto> {
    let fakeFilter = schedulesMock;
    if (query?.name) {
      fakeFilter = schedulesMock.filter((item) => item.name === query.name);
    } else if (query?.speciality) {
      fakeFilter = schedulesMock.filter(
        (item) => item.speciality === query.speciality,
      );
    } else if (query?.availableDate) {
      fakeFilter = schedulesMock.filter((item) =>
        item.available_schedules.includes(query.availableDate),
      );
    }

    return {
      medicos: fakeFilter,
    };
  }
}
