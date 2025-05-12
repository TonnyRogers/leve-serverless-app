import { Entity } from '../../utils/common/entity';
import { CreateSchedulingCommand, SchedulingProps } from '../../utils/types/scheduling';
import { CreateSchedulingResponseDto } from '../dto/create-scheduling-response-dto';

export class Scheduling extends Entity<SchedulingProps> {
  constructor(props: SchedulingProps) {
    super(props);
  }

  static create(command: CreateSchedulingCommand): Scheduling {
    return new Scheduling({
      scheduling: {
        doctor: command.doctor,
        patient: command.patient,
        scheduled_time: command.scheduled_time,
      },
      message: 'Agendamento realizado com sucesso.',
    });
  }

  toJson(): SchedulingProps {
    return {
      scheduling: {
        doctor: this.props.scheduling.doctor,
        patient: this.props.scheduling.patient,
        scheduled_time: this.props.scheduling.scheduled_time,
      },
      message: this.props.message,
    };
  }

  domainToApi(): CreateSchedulingResponseDto {    
    return {
      agendamento: {
        medico: this.props.scheduling.doctor,
        paciente: this.props.scheduling.patient,
        data_horario: this.props.scheduling.scheduled_time,
      },
      mensagem: this.props.message,
    };
  }

  public get message(): string {
    return this.props.message;
  }

  public get scheduling() {
    return this.props.scheduling;
  }
}
