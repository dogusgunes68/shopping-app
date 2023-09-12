import express, { Express } from 'express';
import { apiErrorHandler } from './errors/api-error-handler';
import customerRouter from "./routes/customer";
import productRouter from "./routes/product";
import orderRouter from "./routes/order";
import authRouter from "./routes/auth";

function createServer(){
    const app: Express = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(apiErrorHandler);

    app.use("/customers", customerRouter);
    app.use("/products", productRouter);
    app.use("/orders", orderRouter);
    app.use("/auth",authRouter);

    return app;
}

export default createServer; 