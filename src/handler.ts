import "reflect-metadata";
import { Handler } from 'aws-lambda';
import {container} from "tsyringe";

import { SchedulerController } from './schedule/controller/scheduler-controller';
import { ScheduleService } from './schedule/service/schedule-service';

container.register(ScheduleService.name, { useClass: ScheduleService });
const schedulerController = container.resolve(SchedulerController);

export const listSchedules: Handler = (event: any) => {
  return schedulerController.schedules(event);
}