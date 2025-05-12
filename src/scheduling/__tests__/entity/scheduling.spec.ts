import { Scheduling } from '../../entities/scheduling';

describe('SchedulingEntity', () => {
  it('should create scheduling new instance', () => {
    const schedule = new Scheduling({
      message: 'Agendamento criado.',
      scheduling: {
        doctor: 'Marcelo Brandão',
        patient: 'Antonio Bandeiras',
        scheduled_time: '2025-10-12 13:00',
      },
    });

    expect(schedule.message).toBe('Agendamento criado.');
    expect(schedule.scheduling.doctor).toBe('Marcelo Brandão');
    expect(schedule.scheduling.patient).toBe('Antonio Bandeiras');
    expect(schedule.scheduling.scheduled_time).toBe('2025-10-12 13:00');
  });

  it('should static create scheduling', () => {
    const schedule = Scheduling.create({
      doctor: 'Marcelo Brandão',
      patient: 'Antonio Bandeiras',
      scheduled_time: '2025-10-12 13:00',
    });

    expect(schedule.message).toBe('Agendamento realizado com sucesso.');
    expect(schedule.scheduling.doctor).toBe('Marcelo Brandão');
    expect(schedule.scheduling.patient).toBe('Antonio Bandeiras');
    expect(schedule.scheduling.scheduled_time).toBe('2025-10-12 13:00');
  });

  it('should get scheduling data to json', () => {
    const schedule = Scheduling.create({
      doctor: 'Marcelo Brandão',
      patient: 'Antonio Bandeiras',
      scheduled_time: '2025-10-12 13:00',
    });

    const jsonResult = schedule.toJson();

    expect(jsonResult).toMatchObject(
      expect.objectContaining({
        scheduling: {
          doctor: expect.any(String),
          patient: expect.any(String),
          scheduled_time: expect.any(String),
        },
        message: 'Agendamento realizado com sucesso.',
      }),
    );
  });

  it('should get scheduling data to api', () => {
    const schedule = Scheduling.create({
      doctor: 'Marcelo Brandão',
      patient: 'Antonio Bandeiras',
      scheduled_time: '2025-10-12 13:00',
    });

    const apiResult = schedule.domainToApi();

    expect(apiResult).toMatchObject(
      expect.objectContaining({
        agendamento: {
          medico: expect.any(String),
          paciente: expect.any(String),
          data_horario: expect.any(String),
        },
        mensagem: 'Agendamento realizado com sucesso.',
      }),
    );
  });
});
