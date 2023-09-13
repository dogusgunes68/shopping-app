"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_error_handler_1 = require("./middlewares/api-error-handler");
const customer_1 = __importDefault(require("./routes/customer"));
const product_1 = __importDefault(require("./routes/product"));
const order_1 = __importDefault(require("./routes/order"));
const auth_1 = __importDefault(require("./routes/auth"));
function createServer() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use("/customers", customer_1.default);
    app.use("/products", product_1.default);
    app.use("/orders", order_1.default);
    app.use("/auth", auth_1.default);
    app.use(api_error_handler_1.apiErrorHandler);
    return app;
}
exports.default = createServer;
