import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Admin } from "../models/admin";
import jwt_decode from "jwt-decode";
import config from "../config/auth";

export const hashPassword = async function (password: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

export async function verifyToken(token: string): Promise<any> {
  const decoded = jwt.verify(token, config.jwt_secret);
  return decoded;
}

export function isObject(obj: any): boolean {
  return (obj !== null && obj !== undefined && typeof obj === "object" && !Array.isArray(obj))
}

export function isString(obj: any): boolean {
  return (obj !== null && obj !== undefined && typeof obj === "string" && !Array.isArray(obj))
}

export function isBoolean(obj: any): boolean {
  return (obj !== null && obj !== undefined && typeof obj === "boolean" && !Array.isArray(obj))
}
