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

    describe("Not found", ()=>{
      it("should return a 404 code", async () => {
        const orderId = 100000000000;
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiZGVuZW1lIiwic3VybmFtZSI6ImRlbmVtZSIsImVtYWlsIjoiZGVuZW1lOEBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJElhOC8zelpGVDM5Y2FkMW9talBwa09KUS9GY0J5elNJTmppN0JjcC5WZnlPVm5seHpIZnpPIiwicm9sZSI6InVzZXIiLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0xM1QxNzowODo0NC4zMDdaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDktMTNUMTc6MDg6NDQuMzA3WiJ9LCJpYXQiOjE2OTQ2MjQ5MzgsImV4cCI6MjU1ODYyNDkzOH0.5jq4sTAAzHkrmon9fwxoT-_HB8a23SmhCsWzi8liRaI";
        await request(app).get(`/customers/customer-order/${orderId}`).set('Authorization', 'Bearer ' + token) 
        expect(404);


      });
    })
  });

});