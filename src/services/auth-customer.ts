import {
  checkPasswordForCustomer,
  createCustomer,
  getCustomer,
} from "./customer";
import { Customer } from "../models/customer";
import jwt from "jsonwebtoken";
import config from "../config/auth";

function createCustomerToken(customer: Customer) {
  return jwt.sign({ user: customer }, config.jwt_secret, {
    expiresIn: config.jwt_expires,
  });
}

export async function loginCustomer(customer: Customer) {
  const { email, password } = customer;
  const givenCustomer = await getCustomer(email);
  const correctPassword = await checkPasswordForCustomer(password, email);

  if (givenCustomer && correctPassword) {
    const token = createCustomerToken(givenCustomer);
    return token;
  }
  return null;
}

export async function registerCustomer(customer: Customer) {
  const id = await createCustomer(customer);
  return id;
}
