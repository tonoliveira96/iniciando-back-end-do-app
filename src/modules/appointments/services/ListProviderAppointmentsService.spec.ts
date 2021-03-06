// import AppError from '@shared/errors/AppError';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProvidersProviderService from './ListProviderAppointmentsService';

let fakeAppointmensRepository: FakeAppointmentsRepository;
let listProviderAppointments: ListProvidersProviderService;
let fakeCacheProvider: FakeCacheProvider;
describe('ListProviderAppointemnts', () => {
  beforeEach(() => {
    fakeAppointmensRepository = new FakeAppointmentsRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listProviderAppointments = new ListProvidersProviderService(
      fakeAppointmensRepository,
      fakeCacheProvider
    );
  });
  it('should be able to list the appointments on a specific day', async () => {
    const appointment1 = await fakeAppointmensRepository.create({
      provider_id: 'provider',
      user_id: '123123',
      date: new Date(2020, 4, 20, 14, 0, 0),
    });

    const appointment2 = await fakeAppointmensRepository.create({
      provider_id: 'provider',
      user_id: '123123',
      date: new Date(2020, 4, 20, 15, 0, 0),
    });

    const appointment = await listProviderAppointments.execute({
      provider_id: 'provider',
      year: 2020,
      month: 5,
      day: 20,
    });

    expect(appointment).toEqual([appointment1, appointment2]);
  });
});
