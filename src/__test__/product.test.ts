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

    // Update a product
    describe("update a product", () => {
        describe("not found", ()=> {
            it("should return a 404 code", async () => {
                const productId = 10000000000;
              await request(app).post(`/products/${productId}`).expect(404);
            });
        });
    });
});






