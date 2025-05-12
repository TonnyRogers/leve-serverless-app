import 'reflect-metadata';

import { container } from 'tsyringe';
import { ISchedulingService } from '../../interface/scheduling-service-interface';
import { SchedulingService } from '../../service/scheduling-service';

describe('ScheduleService', () => {
  let schedulingService: ISchedulingService;

  beforeAll(() => {
    schedulingService = container.resolve(SchedulingService);
  });

  it('should be defined', async () => {
    expect(schedulingService).toBeDefined();
  });

  it('should create scheduling', async () => {
    const result = await schedulingService.create({
      doctor: 'Miguel',
      patient: 'Guga Galvão',
      scheduledTime: '2025-07-13 12:20',
    });

    expect(result.mensagem).toBe('Agendamento realizado com sucesso');
    expect(result.agendamento).toMatchObject({
      medico: 'Miguel',
      paciente: 'Guga Galvão',
      data_horario: '2025-07-13 12:20',
    });
  });
});
