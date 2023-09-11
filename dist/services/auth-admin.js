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
exports.registerAdmin = exports.loginAdmin = void 0;
const admin_1 = require("./admin");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = __importDefault(require("../config/auth"));
function createAdminToken(admin) {
    return jsonwebtoken_1.default.sign({ user: admin }, auth_1.default.jwt_secret, {
        expiresIn: auth_1.default.jwt_expires,
    });
}
function loginAdmin(admin) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = admin;
        const givenAdmin = yield (0, admin_1.getAdmin)(email);
        const correctPassword = yield (0, admin_1.checkPasswordForAdmin)(password, email);
        if (givenAdmin && correctPassword) {
            return createAdminToken(admin);
        }
        return null;
    });
}
exports.loginAdmin = loginAdmin;
function registerAdmin(admin) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = yield (0, admin_1.createAdmin)(admin);
        return id;
    });
}
exports.registerAdmin = registerAdmin;
