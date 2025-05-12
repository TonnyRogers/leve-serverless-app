import 'reflect-metadata';

import { container } from 'tsyringe';
import { ScheduleController } from '../../controller/schedule-controller';
import { ScheduleService } from '../../service/schedule-service';

describe('ScheduleController', () => {
  let scheduleController: ScheduleController;

  beforeAll(() => {
    container.register(ScheduleService.name, { useClass: ScheduleService });
    scheduleController = container.resolve(ScheduleController);
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
