/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, injectable } from 'tsyringe';
import { IScheduleService } from '../interface/schedule-service-interface';
import { ScheduleService } from '../service/schedule-service';
import { LambdaMessage, StatusCode } from '../../utils/response';
import { Get } from '../../utils/decorators/request-methods';
import { Query } from '../../utils/decorators/query';

@injectable()
export class ScheduleController {
  constructor(
    @inject(ScheduleService.name)
    private readonly scheduleService: IScheduleService,
  ) {}

  @Get()
  async schedules(@Query() event: any) {
    try {
      const result = await this.scheduleService.listSchedules(event);

      return LambdaMessage.resolve(result, StatusCode.success);
    } catch (error) {
      return LambdaMessage.error(error.message, error.status);
    }
  }
}
