import request from 'supertest';
import app from '../index'; // Express uygulamanızın yolu
import { customerValidation } from '../validation/validate-customer-body'; // Doğrulama şemanızın yolu

describe('Customer API', () => {
  it('should create a new customer', async () => {
    const newCustomer = {
      name: 'test',
      surname: 'test',
      email: 'test@mail.com',
      password: '123456789',
      role: 'user',
    };

    const response = await request(app)
      .post('/customers')
      .send(newCustomer);

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('New customer created');
    expect(response.body.data.customerId).toBeDefined();
  });

  it('should require admin authentication', async () => {
    const newCustomer = {
      name: 'test',
      surname: 'test',
      email: 'test@mail.com',
      password: '123456789',
      role: 'user',
    };

    const response = await request(app)
      .post('/customers')
      .send(newCustomer);

    expect(response.status).toBe(401);
  });

});