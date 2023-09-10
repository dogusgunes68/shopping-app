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
const index_1 = __importDefault(require("../index")); // Express uygulamanızın yolu
describe('Customer API', () => {
    it('should create a new customer', () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = {
            name: 'test',
            surname: 'test',
            email: 'test@mail.com',
            password: '123456789',
            role: 'user',
        };
        const response = yield (0, supertest_1.default)(index_1.default)
            .post('/customers')
            .send(newCustomer);
        expect(response.status).toBe(201);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe('New customer created');
        expect(response.body.data.customerId).toBeDefined();
    }));
    it('should require admin authentication', () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = {
            name: 'test',
            surname: 'test',
            email: 'test@mail.com',
            password: '123456789',
            role: 'user',
        };
        const response = yield (0, supertest_1.default)(index_1.default)
            .post('/customers')
            .send(newCustomer);
        expect(response.status).toBe(401);
    }));
});
