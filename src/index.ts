import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import customerRouter from "./routes/customer";
import productRouter from "./routes/product";
import orderRouter from "./routes/order";
import authRouter from "./routes/auth";
import { apiErrorHandler } from './errors/api-error-handler';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(apiErrorHandler);


app.use("/customers", customerRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/auth",authRouter)


app.listen(port, function(){
  console.log("listening on port", port);
});

export default app;

