export type CreateSchedulingCommand = {
  doctor: string;
  patient: string;
  scheduled_time: string;
};

export type SchedulingProps = {
  message: string;
  scheduling: {
    doctor: string;
    patient: string;
    scheduled_time: string;
  };
};