import { container } from "tsyringe";
import { ScheduleService } from "../../schedule/service/schedule-service";
import { SchedulingService } from "../../scheduling/service/scheduling-service";

container.register(ScheduleService.name, { useClass: ScheduleService });
container.register(SchedulingService.name, { useClass: SchedulingService });

export default container;