import { injectable } from "tsyringe";

import { ISchedulingService } from "../interface/scheduling-service-interface";
import { CreateSchedulingDto } from "../dto/create-scheduling-dto";
import { CreateSchedulingResponseDto } from "../dto/create-scheduling-response-dto";
import { isDateValid } from "../../utils/is-date-valid";
import { schedulingMock } from "../mocks/scheduling-mock";
import { Scheduling } from "../entities/scheduling";

@injectable()
export class SchedulingService implements ISchedulingService {
  constructor() {}
  
  async create(dto: CreateSchedulingDto): Promise<CreateSchedulingResponseDto> {
      if(!isDateValid(dto.scheduledTime)) {
        throw new Error('Invalid date.');
      }

      if(dto.doctor === '' || dto.patient === '') {
        throw new Error('empty values.');
      }

      const scheduling = new Scheduling({
        ...schedulingMock,
        scheduling: {
          doctor: dto.doctor,
          patient: dto.patient,
          scheduled_time: dto.scheduledTime
        }
      });     

      return scheduling.domainToApi();
  }  
}