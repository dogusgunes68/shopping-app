import db from "../database/db";
import { Log } from "../models/log";

export async function createLog(log: Log){
    await db("logs").insert(log);
}