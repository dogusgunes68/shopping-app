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
exports.getDetailsOfOrder = exports.listOrders = exports.checkPasswordForCustomer = exports.getCustomer = exports.createCustomer = void 0;
const db_1 = __importDefault(require("../database/db"));
const helper_1 = require("../utils/helper");
const bcrypt_1 = __importDefault(require("bcrypt"));
function createCustomer(customer) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, surname, email, password, role } = customer;
        const hashedPass = yield (0, helper_1.hashPassword)(password);
        const [id] = yield (0, db_1.default)("customer")
            .insert({
            name,
            surname,
            email,
            password: hashedPass,
            role,
        })
            .returning("id");
        return id;
    });
}
exports.createCustomer = createCustomer;
function getCustomer(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const [customer] = yield (0, db_1.default)("customer").select("*").where("email", email);
        return customer;
    });
}
exports.getCustomer = getCustomer;
function checkPasswordForCustomer(password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const customer = yield getCustomer(email);
        return yield bcrypt_1.default.compare(password, customer.password);
    });
}
exports.checkPasswordForCustomer = checkPasswordForCustomer;
function listOrders(customerId) {
    return __awaiter(this, void 0, void 0, function* () {
        const rows = yield (0, db_1.default)("order").select("*").where("customer_id", customerId);
        return rows;
    });
}
exports.listOrders = listOrders;
function getDetailsOfOrder(orderId, customer_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const order = yield (0, db_1.default)("order").select("*").where("id", orderId).andWhere("customer_id", customer_id);
        return order;
    });
}
exports.getDetailsOfOrder = getDetailsOfOrder;
