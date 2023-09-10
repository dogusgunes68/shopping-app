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
exports.updateProduct = exports.createProduct = void 0;
const db_1 = __importDefault(require("../database/db"));
function createProduct(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, price, description } = product;
        const [id] = yield (0, db_1.default)("product").insert({
            name,
            price,
            description
        }).returning("id");
        return id;
    });
}
exports.createProduct = createProduct;
function updateProduct(id, changes) {
    return __awaiter(this, void 0, void 0, function* () {
        const count = yield (0, db_1.default)('product').where({ id }).update(changes);
        return count;
    });
}
exports.updateProduct = updateProduct;
