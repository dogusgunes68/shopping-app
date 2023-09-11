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
exports.checkPasswordForAdmin = exports.getAdmin = exports.createAdmin = void 0;
const db_1 = __importDefault(require("../database/db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const helper_1 = require("../utils/helper");
function createAdmin(admin) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password, role } = admin;
        const hashedPass = yield (0, helper_1.hashPassword)(password);
        const [id] = yield (0, db_1.default)("admin").insert({
            email,
            password: hashedPass,
            role
        }).returning("id");
        return id;
    });
}
exports.createAdmin = createAdmin;
function getAdmin(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const [admin] = yield (0, db_1.default)("admin").select("*").where("email", email);
        return admin;
    });
}
exports.getAdmin = getAdmin;
function checkPasswordForAdmin(password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const admin = yield getAdmin(email);
        return yield bcrypt_1.default.compare(password, admin.password);
    });
}
exports.checkPasswordForAdmin = checkPasswordForAdmin;
