import 'reflect-metadata';
import { container } from 'tsyringe';
import { IScheduleService } from '../../interface/schedule-service-interface';
import { scheduleListMock } from '../../mocks/schedule-list-mock';
import { ScheduleService } from '../../service/schedule-service';

describe('ScheduleService', () => {
  let scheduleService: IScheduleService;

  beforeAll(() => {
    scheduleService = container.resolve(ScheduleService);
  });

  it('should be defined', async () => {
    expect(scheduleService).toBeDefined();
  });

  it('should list schedules', async () => {
    const result = await scheduleService.listSchedules({});

    expect(result.medicos).toHaveLength(scheduleListMock.medicos.length);
    expect(result.medicos[0]).toMatchObject(
      expect.objectContaining({
        id: expect.any(Number),
        nome: expect.any(String),
        especialidade: expect.any(String),
        horarios_disponiveis: expect.any(Array),
      }),
    );
  });

  it('should list filtered schedules by name', async () => {
    const result = await scheduleService.listSchedules({
      name: scheduleListMock.medicos[0].name,
    });

    expect(result.medicos).toHaveLength(1);
  });

  it('should list filtered schedules by speciality', async () => {
    const result = await scheduleService.listSchedules({
      speciality: scheduleListMock.medicos[0].speciality,
    });

    expect(result.medicos).toHaveLength(1);
  });

  it('should list filtered schedules by speciality', async () => {
    const result = await scheduleService.listSchedules({
      availableDate: scheduleListMock.medicos[0].available_schedules[0],
    });

    expect(result.medicos).toHaveLength(1);
  });

  it('should list filtered schedules by name with void return', async () => {
    const result = await scheduleService.listSchedules({
      name: 'Gasparzinho',
    });

    expect(result.medicos).toHaveLength(0);
  });
});
