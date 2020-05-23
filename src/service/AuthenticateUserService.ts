import { getRepository } from 'typeorm';
import { compare } from 'bcrypt';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const userrepository = getRepository(User);

    const user = await userrepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email/password combination');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination');
    }

    // autenticado

    return {
      user,
    };
  }
}

export default AuthenticateUserService;
