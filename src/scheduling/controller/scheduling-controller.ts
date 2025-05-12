/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, injectable } from 'tsyringe';
import { ISchedulingService } from '../interface/scheduling-service-interface';
import { SchedulingService } from '../service/scheduling-service';
import { LambdaMessage, StatusCode } from '../../utils/response';
import { Body } from '../../utils/decorators/body';
import { Post } from '../../utils/decorators/request-methods';

@injectable()
export class SchedulingController {
  constructor(
    @inject(SchedulingService.name)
    private readonly schedulingService: ISchedulingService,
  ) {}

  @Post()
  async createScheduling(
    @Body()
    event: any,
  ) {
    try {
      const result = await this.schedulingService.create(event);

      return LambdaMessage.resolve(result, StatusCode.created);
    } catch (error) {
      return LambdaMessage.error(error.message, error.status);
    }
  }
}
