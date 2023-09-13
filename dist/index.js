"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./server"));
dotenv_1.default.config();
const port = process.env.PORT || 4001;
const app = (0, server_1.default)();
app.listen(port, function () {
    console.log("listening on port", port);
});
exports.default = app;
