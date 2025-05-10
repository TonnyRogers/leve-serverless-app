import 'reflect-metadata';

import { container } from 'tsyringe';
import { SchedulerController } from '../../controller/scheduler-controller';
import { ScheduleService } from '../../service/schedule-service';

describe('ScheduleController', () => {
  let scheduleController: SchedulerController;

  beforeAll(() => {
    container.register(ScheduleService.name, { useClass: ScheduleService });
    scheduleController = container.resolve(SchedulerController);
  });

  it('should be defined', async () => {
    expect(scheduleController).toBeDefined();
  });

  it('should list schedules', async () => {
    const response = await scheduleController.schedules({});

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
  });
});
