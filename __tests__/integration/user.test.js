import request from 'supertest';
import bcrypt from 'bcryptjs';

import app from '../../src/app';

import User from '../../src/app/models/User';

describe('User', () => {
  beforeEach(async () => {
    await User.collection.remove();
  });

  it('should encrypt user password when new user created', async () => {
    const user = await User.create({
      login: 'will@a.aluno.com',
      password: '123456',
    });

    const compareHash = await user.comparePassword('123456');

    expect(compareHash).toBe(true);
  });

  it('should be able to register', async () => {
    const user = {
      login: 'williamsgomes45@gmail.com',
      password: '965526',
    };

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });
});
