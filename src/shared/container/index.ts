import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUserRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UserRepostory';

// import IUsersTokensRepository from '@modules/users/repositories/IUserTokenRepository';
// import UsersTokenRepository from '@modules/users/infra/typeorm/repositories/UserRepostory';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

// container.registerSingleton<IUsersRepository>(
//   'UserTokensRepository',
//   UserTokensRepository
// );
