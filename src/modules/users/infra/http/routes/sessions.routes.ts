import { Router } from 'express';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UserRepostory';

import AuthenticateUSerService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  const usersRepostory = new UsersRepository();

  const authenticateUser = new AuthenticateUSerService(usersRepostory);

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
