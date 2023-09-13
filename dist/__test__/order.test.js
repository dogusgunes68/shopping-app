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
describe('order', () => {
    // Create a new order
    describe("create order", () => {
        describe("bad request", () => {
            it("should return a 400 code", () => __awaiter(void 0, void 0, void 0, function* () {
                yield (0, supertest_1.default)(app).post("/orders").expect(400);
            }));
        });
        describe("access denied", () => {
            it("should return a 403 code", () => __awaiter(void 0, void 0, void 0, function* () {
                const order = {
                    count: 2,
                    product_id: 1
                };
                const customer_id = 1;
                yield (0, supertest_1.default)(app).post("/orders").set({ id: customer_id }).send(order).expect(403);
            }));
        });
    });
});
