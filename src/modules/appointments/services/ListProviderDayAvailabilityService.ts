import { injectable, inject } from 'tsyringe';
import { getHours } from 'date-fns';
// import AppError from '@shared/errors/AppError';

import IAppointmentRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
  day: number;
}

type IResponse = Array<{
  hour: number;
  available: boolean;
}>;

@injectable()
class ListProvidersDayAvailabityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentRepository: IAppointmentRepository
  ) {}

  public async execute({
    provider_id,
    month,
    year,
    day,
  }: IRequest): Promise<IResponse> {
    const appointments = await this.appointmentRepository.findAllInDayFromProvider(
      {
        provider_id,
        month,
        year,
        day,
      }
    );

    const hourStart = 8;

    const eachHourArray = Array.from(
      { length: 10 },
      (_, index) => index + hourStart
    );

    const availability = eachHourArray.map(hour => {
      const hasAppointmentInHour = appointments.find(
        appointment => getHours(appointment.date) === hour
      );

      return {
        hour,
        available: !hasAppointmentInHour,
      };
    });

    return availability;
  }
}

export default ListProvidersDayAvailabityService;
