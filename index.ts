import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

global.user: string = "admin";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


// app.use("/customers", customerRouter);

