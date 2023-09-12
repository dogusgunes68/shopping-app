import request from 'supertest';
import createServer from '../server';

const app = createServer();

describe('auth', () => {

  // Authentication admin
  describe('auth admin', () => {
    describe("login", ()=> {
        describe("bad request", ()=> {
            it("should return a 400 code", async () => {
                await request(app).post("/auth/login-admin").expect(400);
            });
        });
      
    });

    describe("register", () => {
        describe("bad request", ()=> {
            it("should return a 400 code", async () => {
                await request(app).post("/auth/register-admin").expect(400);
            });
        });
      });

    });

  // Authentication customer
  describe("auth customer", () => {
    describe("login", ()=> {
        describe("bad request", ()=> {
            it("should return a 400 code", async () => {
                await request(app).post("/auth/login-customer").expect(400);
            });
        });
      
    });

    describe("register", () => {
        describe("bad request", ()=> {
            it("should return a 400 code", async () => {
                await request(app).post("/auth/login-customer").expect(400);
            });
        });
      });
  });

});