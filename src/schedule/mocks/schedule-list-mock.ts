import { ScheduleProps } from '../../utils/types/schedule';

export const schedulesMock: ScheduleProps[] = [
  {
    id: 1,
    name: 'Dr. Marcos Alves',
    speciality: 'Cardiologista',
    available_schedules: [
      '2025-09-23 10:00',
      '2025-09-23 12:00',
      '2025-09-23 14:00',
      '2025-09-25 16:00',
    ],
  },
  {
    id: 2,
    name: 'Dra. Regina Campos',
    speciality: 'Pediatra',
    available_schedules: [
      '2025-09-25 16:00',
      '2025-09-25 18:00',
      '2025-09-27 12:00',
    ],
  },
];

export const scheduleListMock = {
  medicos: schedulesMock,
};
