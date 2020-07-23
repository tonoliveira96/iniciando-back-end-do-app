// import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProvidersDayAvailabilityService from './ListProviderDayAvailabilityService';

let fakeAppointmensRepository: FakeAppointmentsRepository;
let listProviderDayAvailability: ListProvidersDayAvailabilityService;

describe('ListProviderDayAvailability', () => {
  beforeEach(() => {
    fakeAppointmensRepository = new FakeAppointmentsRepository();
    listProviderDayAvailability = new ListProvidersDayAvailabilityService(
      fakeAppointmensRepository
    );
  });
  it('should be able to list the month availability from provider', async () => {
    await fakeAppointmensRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 8, 0, 0),
    });

    await fakeAppointmensRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 10, 0, 0),
    });

    const availability = await listProviderDayAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
      day: 20,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: true },
        { hour: 10, available: false },
        { hour: 11, available: true },
      ])
    );
  });
});
