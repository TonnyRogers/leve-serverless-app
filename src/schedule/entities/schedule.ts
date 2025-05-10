import { Entity } from '../../utils/common/entity';
import {
  AddAvailableSchedulesCommand,
  CreateScheduleCommand,
  ScheduleProps,
} from '../../utils/types/schedule';

export class Schedule extends Entity<ScheduleProps> {
  constructor(props: ScheduleProps) {
    super(props);
  }

  static create(command: CreateScheduleCommand): Schedule {
    return new Schedule({
      id: command.id,
      name: command.name,
      speciality: command.speciality,
      available_schedules: [],
    });
  }

  addScheduleDates(command: AddAvailableSchedulesCommand): void {
    this.props.available_schedules.push(...command.dates);
  }

  public get id(): number {
    return this.props.id;
  }

  public get name(): string {
    return this.props.name;
  }

  public get speciality(): string {
    return this.props.speciality;
  }

  public get available_schedules(): string[] {
    return this.props.available_schedules;
  }
}
