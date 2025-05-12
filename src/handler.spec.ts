/* eslint-disable @typescript-eslint/no-explicit-any */
import { LambdaFunctionURLEvent } from 'aws-lambda';
import { createScheduling, listSchedules } from './handler';
import { scheduleListMock } from './schedule/mocks/schedule-list-mock';

describe('handler', () => {
  it('handler.createScheduling should return 201 on create scheduling', async () => {
    const mockEvent: Partial<LambdaFunctionURLEvent> = {
      body: JSON.stringify({
        doctor: 'Marcel Braga',
        patient: 'Lucas Pires',
        scheduledTime: '2025-06-08 10:00',
      }),
    };

    const result = await createScheduling(
      mockEvent as LambdaFunctionURLEvent,
      {} as any,
      () => {},
    );

    expect(result).toBeDefined();
    expect(result.statusCode).toBe(201);
    expect(typeof result.body).toBe('string');
    const body = JSON.parse(result.body as string);
    expect(body.data.mensagem).toBe('Agendamento realizado com sucesso');
    expect(body.data.agendamento).toMatchObject({
      medico: 'Marcel Braga',
      paciente: 'Lucas Pires',
      data_horario: '2025-06-08 10:00',
    });
  });

  it('handler.listSchedules should return 200 on list schedules without filter', async () => {
    const mockEvent: Partial<LambdaFunctionURLEvent> = {};

    const result = await listSchedules(
      mockEvent as LambdaFunctionURLEvent,
      {} as any,
      () => {},
    );

    expect(result).toBeDefined();
    expect(result.statusCode).toBe(200);
    expect(typeof result.body).toBe('string');
    const body = JSON.parse(result.body as string);
    expect(body.data.medicos).toHaveLength(scheduleListMock.medicos.length);
    expect(body.data.medicos[0]).toMatchObject(
      expect.objectContaining({
        id: expect.any(Number),
        nome: expect.any(String),
        especialidade: expect.any(String),
        horarios_disponiveis: expect.any(Array),
      }),
    );
  });

  it('handler.listSchedules should return 200 on list schedules with name filter', async () => {
    const mockEvent: Partial<
      LambdaFunctionURLEvent & { queryStringParameters: any }
    > = {
      queryStringParameters: {
        name: 'Dr. Marcos Alves',
      },
    };

    const result = await listSchedules(
      mockEvent as LambdaFunctionURLEvent,
      {} as any,
      () => {},
    );

    expect(result).toBeDefined();
    expect(result.statusCode).toBe(200);
    expect(typeof result.body).toBe('string');
    const body = JSON.parse(result.body as string);
    expect(body.data.medicos).toHaveLength(1);
    expect(body.data.medicos[0]).toMatchObject(
      expect.objectContaining({
        id: expect.any(Number),
        nome: expect.any(String),
        especialidade: expect.any(String),
        horarios_disponiveis: expect.any(Array),
      }),
    );
  });
});
