import 'reflect-metadata';

import { container } from 'tsyringe';
import { SchedulingController } from '../../controller/scheduling-controller';
import { SchedulingService } from '../../service/scheduling-service';

describe('SchedulingController', () => {
  let schedulingController: SchedulingController;

  beforeAll(() => {
    container.register(SchedulingService.name, { useClass: SchedulingService });
    schedulingController = container.resolve(SchedulingController);
  });

  it('should be defined', async () => {
    expect(schedulingController).toBeDefined();
  });

  it('should create scheduling', async () => {
    const response = await schedulingController.createScheduling({
      body: {
        doctor: 'Hugo Abreu',
        patient: 'Abreu Silva',
        scheduledTime: '2025-05-31 12:00',
      },
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toBeTruthy();
  });
});
