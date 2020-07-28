import { injectable, inject } from 'tsyringe';
// import { getDaysInMonth, getDate } from 'date-fns';
// import AppError from '@shared/errors/AppError';
import Appointments from '../infra/typeorm/entities/Appointments';
import IAppointmentRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}

@injectable()
class ListProvidersProviderService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentRepository: IAppointmentRepository
  ) {}

  public async execute({
    provider_id,
    day,
    month,
    year,
  }: IRequest): Promise<Appointments[]> {
    const appointments = await this.appointmentRepository.findAllInDayFromProvider(
      {
        provider_id,
        year,
        month,
        day,
      }
    );

    return appointments;
  }
}

export default ListProvidersProviderService;
