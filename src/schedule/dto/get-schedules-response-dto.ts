import { ScheduleProps } from "../../utils/types/schedule";

class GetSchedulesResponseItem implements ScheduleProps {
  id: number;
  available_schedules: string[];
  name: string;
  speciality: string;
}

export class GetSchedulesResponseDto {
  medicos: GetSchedulesResponseItem[];
}