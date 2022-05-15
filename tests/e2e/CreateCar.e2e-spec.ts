import request from 'supertest';

import { app } from '../../src/infra/http/App';

describe('Create Car Controller', () => {
  it('should be able to create a new car', async () => {
    const response = await request(app).post('/cars').send({
      name: 'Car',
      brand: 'Car Brand',
      description: 'Car Description',
      price: 'Price',
      user_id: '12345622',
      phone: '12345678',
    });
    expect(response.status).toBe(201);
  });
});
