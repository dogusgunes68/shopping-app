import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './database/connection';
import db from "./database/models"
import customerRouter from "./routes/customer";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// connection
//   .sync({force: true})
//   .then(() => {
//     console.log("Database successfully connected");
//     app.listen(port, () => {
//       console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
//     });
//   })
//   .catch((err) => {
//     console.log("Error", err.message);
//   });

db.sequelize
.sync()
.then(() => {
  console.log("Database successfully connected");
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
})
.catch((err: Error) => {
  console.log("Error", err.message);
});

app.use("/customers", customerRouter);

