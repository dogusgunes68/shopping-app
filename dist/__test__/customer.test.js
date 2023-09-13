"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const app = (0, server_1.default)();
describe('customer', () => {
    // Create a new customer
    describe('create customer', () => {
        describe("bad request", () => {
            it("should return a 400 code", () => __awaiter(void 0, void 0, void 0, function* () {
                yield (0, supertest_1.default)(app).post("/customers").expect(400);
            }));
        });
        describe("access denied", () => {
            it("should return a 403 code", () => __awaiter(void 0, void 0, void 0, function* () {
                const customer = {
                    name: "deneme",
                    surname: "deneme",
                    email: "deneme@example.com",
                    password: "123456789",
                    role: "user"
                };
                yield (0, supertest_1.default)(app).post("/customers").send(customer).expect(403);
            }));
        });
    });
    // List of orders
    describe("list orders", () => {
        describe("access denied", () => {
            it("should return a 403 code", () => __awaiter(void 0, void 0, void 0, function* () {
                yield (0, supertest_1.default)(app).get("/customers/customer-orders").expect(403);
            }));
        });
    });
    // Get Details of Order
    describe("get order details", () => {
        describe("access denied", () => {
            it("should return a 403 code", () => __awaiter(void 0, void 0, void 0, function* () {
                const orderId = 1;
                yield (0, supertest_1.default)(app).get(`/customers/customer-order/${orderId}`).expect(403);
            }));
        });
        describe("Not found", () => {
            it("should return a 404 code", () => __awaiter(void 0, void 0, void 0, function* () {
                const orderId = 100000000000;
                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiZGVuZW1lIiwic3VybmFtZSI6ImRlbmVtZSIsImVtYWlsIjoiZGVuZW1lOEBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJElhOC8zelpGVDM5Y2FkMW9talBwa09KUS9GY0J5elNJTmppN0JjcC5WZnlPVm5seHpIZnpPIiwicm9sZSI6InVzZXIiLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0xM1QxNzowODo0NC4zMDdaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDktMTNUMTc6MDg6NDQuMzA3WiJ9LCJpYXQiOjE2OTQ2MjQ5MzgsImV4cCI6MjU1ODYyNDkzOH0.5jq4sTAAzHkrmon9fwxoT-_HB8a23SmhCsWzi8liRaI";
                yield (0, supertest_1.default)(app).get(`/customers/customer-order/${orderId}`).set('Authorization', 'Bearer ' + token);
                expect(404);
            }));
        });
    });
});
