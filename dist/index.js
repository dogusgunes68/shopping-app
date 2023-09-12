"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const customer_1 = __importDefault(require("./routes/customer"));
const product_1 = __importDefault(require("./routes/product"));
const order_1 = __importDefault(require("./routes/order"));
const auth_1 = __importDefault(require("./routes/auth"));
const api_error_handler_1 = require("./errors/api-error-handler");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 4001;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(api_error_handler_1.apiErrorHandler);
app.use("/customers", customer_1.default);
app.use("/products", product_1.default);
app.use("/orders", order_1.default);
app.use("/auth", auth_1.default);
// async function migration(){
//   try {
//     await db.migrate.latest();
//   } catch (error) {
//     console.log(error);
//   }
// }
// migration();
app.listen(port, function () {
    console.log("listening on port", port);
});
exports.default = app;
