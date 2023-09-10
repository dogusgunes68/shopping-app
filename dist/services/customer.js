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
exports.createCustomer = void 0;
const db_1 = __importDefault(require("../database/db"));
const helper_1 = require("../utils/helper");
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
