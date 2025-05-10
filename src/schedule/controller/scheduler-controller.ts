import { inject, injectable } from 'tsyringe';
import { IScheduleService } from '../interface/schedule-service-interface';
import { ScheduleService } from '../service/schedule-service';
import { LambdaMessage, StatusCode } from '../../utils/response';

@injectable()
export class SchedulerController {
  constructor(
    @inject(ScheduleService.name)
    private readonly scheduleService: IScheduleService,
  ) {}

  async schedules(event: any) {
    try {
      const result = await this.scheduleService.listSchedules(
        event.queryStringParameters,
      );

      return LambdaMessage.resolve(result, StatusCode.success);
    } catch (error) {
      return LambdaMessage.error(error.message, error.status);
    }
  }
}
