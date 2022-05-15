import request from 'supertest';

import { app } from '../../src/infra/http/App';

describe('Create User Controller', () => {
  it('should be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      name: 'Jhon Doe',
      email: 'jhondoe3@example.com',
      password: '123456',
    });
    expect(response.status).toBe(201);
  });

  it('should not be able to create users without data', async () => {
    const response = await request(app).post('/users').send({
      name: '',
      email: '',
      password: '',
    });
    expect(response.status).toBe(400);
  });

  it('should not be able to create a new user with an existing e-mail', async () => {
    const response = await request(app).post('/users').send({
      name: 'Jhon Doe',
      email: 'jhondoe3@example.com',
      password: '123456',
    });
    expect(response.status).toBe(400);
  });
});
