import request from 'supertest';
import createServer from '../server';

const app = createServer();

describe('product', () => {
    // Create a new product
    describe("create a new product", () => {
        describe("bad request", ()=> {
            it("should return a 400 code", async () => {
              await request(app).post("/products").expect(400);
            });
        });
    });
});






