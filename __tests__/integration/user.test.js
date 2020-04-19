const request = require('supertest');

const app = require('../../src/app');

const User = require('../../src/app/models/User');

describe('User', () => {
  beforeEach(async () => {
    await User.collection.remove();
  });

  it('should encrypt user password when new user created', async () => {
    const user = await User.create({
      login: 'will@a.aluno.com',
      password: '123456',
      name: 'Will',
    });

    const compareHash = await user.comparePassword('123456');

    expect(compareHash).toBe(true);
  });

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/api/v1/users')
      .send({
        login: 'williamsgomes45@gmail.com',
        password: '965526',
        name: 'Will',
      });

      console.log(response.body);

    expect(response.body).toHaveProperty('_id');
  });
});
