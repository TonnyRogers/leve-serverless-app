export type CreateScheduleCommand = {
  id: number;
  name: string;
  speciality: string;
} 

export type AddAvailableSchedulesCommand = {
  dates: string[];
} 

export type ScheduleProps = {
  id: number;
  name: string;
  speciality: string;
  available_schedules: string[];
} 