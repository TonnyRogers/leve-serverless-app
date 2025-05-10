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
});
