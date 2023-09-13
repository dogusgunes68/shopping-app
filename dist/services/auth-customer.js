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
exports.registerCustomer = exports.loginCustomer = void 0;
const customer_1 = require("./customer");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = __importDefault(require("../config/auth"));
function createCustomerToken(customer) {
    return jsonwebtoken_1.default.sign({ user: customer }, auth_1.default.jwt_secret, {
        expiresIn: auth_1.default.jwt_expires,
    });
}
function loginCustomer(customer) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = customer;
        const givenCustomer = yield (0, customer_1.getCustomer)(email);
        const correctPassword = yield (0, customer_1.checkPasswordForCustomer)(password, email);
        if (givenCustomer && correctPassword) {
            const token = createCustomerToken(givenCustomer);
            return token;
        }
        return null;
    });
}
exports.loginCustomer = loginCustomer;
function registerCustomer(customer) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = yield (0, customer_1.createCustomer)(customer);
        return id;
    });
}
exports.registerCustomer = registerCustomer;
