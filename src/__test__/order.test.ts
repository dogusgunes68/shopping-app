import request from 'supertest';
import createServer from '../server';

const app = createServer();


describe('order', () => {
    
    // Create a new order
    describe("create order", () => {
        describe("bad request", ()=> {
            it("should return a 400 code", async () => {
              await request(app).post("/orders").expect(400);
            });
          });
      
          describe("access denied", () => {
            it("should return a 403 code", async () => {
              const order = {
                count: 2,
                product_id: 1
              }
              const customer_id= 1;

              await request(app).post("/orders").set({ id: customer_id}).send(order).expect(403);
            });
          });
    });

    
    
});