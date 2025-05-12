import "reflect-metadata";
import { Handler, LambdaFunctionURLEvent } from 'aws-lambda';

import container from "./utils/container";
import { ScheduleController } from './schedule/controller/schedule-controller';
import { SchedulingController } from "./scheduling/controller/scheduling-controller";


const scheduleController = container.resolve(ScheduleController);
const schedulingController = container.resolve(SchedulingController);

export const listSchedules: Handler = async (event: LambdaFunctionURLEvent) => {
  return scheduleController.schedules(event);
}

export const createScheduling: Handler = async (event: LambdaFunctionURLEvent) => {  
  return schedulingController.createScheduling(event);
}