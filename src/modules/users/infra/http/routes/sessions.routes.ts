import { Router } from 'express';
import { container } from 'tsyringe';

import AuthenticateUSerService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  console.log('Recebeu os dados do body');

  const authenticateUser = container.resolve(AuthenticateUSerService);

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });
  console.log('Passou no autenticate');

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
