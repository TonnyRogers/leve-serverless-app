import { Entity } from '../../utils/common/entity';
import {
  AddAvailableSchedulesCommand,
  CreateScheduleCommand,
  ScheduleProps,
} from '../../utils/types/schedule';
import { GetSchedulesResponseItem } from '../dto/get-schedules-response-dto';

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

  toJson(): ScheduleProps {
    return {
      id: this.props.id,
      name: this.props.name,
      speciality: this.props.speciality,
      available_schedules: this.props.available_schedules,
    };
  }

  domainToApi(): GetSchedulesResponseItem {
    return {
      id: this.props.id,
      especialidade: this.props.speciality,
      nome: this.props.name,
      horarios_disponiveis: this.props.available_schedules,
    };
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
