import { describe } from 'node:test';
import { Schedule } from '../../entities/schedule';

describe('ScheduleEntity', () => {
  it('should create schedule new instance', () => {
    const schedule = new Schedule({
      id: 1,
      name: 'Jose',
      speciality: 'Pediatra',
      available_schedules: ['2025-09-09 10:00'],
    });

    expect(schedule.id).toBe(1);
    expect(schedule.name).toBe('Jose');
    expect(schedule.speciality).toBe('Pediatra');
    expect(schedule.available_schedules[0]).toBe('2025-09-09 10:00');
  });

  it('should static create schedule new instance', () => {
    const schedule = Schedule.create({
      id: 1,
      name: 'Manoela',
      speciality: 'Clinico Geral',
    });

    expect(schedule.id).toBe(1);
    expect(schedule.name).toBe('Manoela');
    expect(schedule.speciality).toBe('Clinico Geral');
    expect(schedule.available_schedules).toHaveLength(0);
  });

  it('should add available dates to schedule', () => {
    const schedule = Schedule.create({
      id: 1,
      name: 'Manoela',
      speciality: 'Clinico Geral',
    });

    schedule.addScheduleDates({ dates: ['2025-06-06', '2025-06-08'] });

    expect(schedule.id).toBe(1);
    expect(schedule.name).toBe('Manoela');
    expect(schedule.speciality).toBe('Clinico Geral');
    expect(schedule.available_schedules).toHaveLength(2);
  });

  it('should get schedule data to json', () => {
    const schedule = Schedule.create({
      id: 1,
      name: 'Manoela',
      speciality: 'Clinico Geral',
    });

    schedule.addScheduleDates({ dates: ['2025-06-06', '2025-06-08'] });

    const jsonResult = schedule.toJson();

    expect(jsonResult).toMatchObject(expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
      speciality: expect.any(String),
      available_schedules: expect.any(Array),
    }))
  });

  it('should get schedule domain data to api response', () => {
    const schedule = Schedule.create({
      id: 1,
      name: 'Manoela',
      speciality: 'Clinico Geral',
    });

    schedule.addScheduleDates({ dates: ['2025-06-06', '2025-06-08'] });

    const jsonResult = schedule.domainToApi();

    expect(jsonResult).toMatchObject(expect.objectContaining({
      id: expect.any(Number),
      nome: expect.any(String),
      especialidade: expect.any(String),
      horarios_disponiveis: expect.any(Array),
    }))
  });
});
