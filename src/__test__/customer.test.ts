import request from 'supertest';
import { Customer } from '../models/customer';
import createServer from '../server';

const app = createServer();

describe('customer', () => {

  // Create a new customer
  describe('create customer', () => {
    describe("bad request", ()=> {
      it("should return a 400 code", async () => {
        await request(app).post("/customers").expect(400);
      });
    });

    describe("access denied", () => {
      it("should return a 403 code", async () => {
        const customer: Customer = {
          name: "deneme",
          surname: "deneme",
          email:"deneme@example.com",
          password:"123456789",
          role: "user"
        }
        await request(app).post("/customers").send(customer).expect(403);
      });
    });
  });

  // List of orders

  describe("list orders", () => {
    describe("access denied", () => {
      it("should return a 403 code", async () => {
        await request(app).get("/customers/customer-orders").expect(403);
      });
    });
  });

  // Get Details of Order
  describe("get order details", () => {
    describe("access denied", () => {
      it("should return a 403 code", async () => {
        const orderId = 1;
        await request(app).get(`/customers/customer-order/${orderId}`).expect(403);
      });
    });
  });

});