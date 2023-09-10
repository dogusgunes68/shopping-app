import db from "../database/db";
import { hashPassword } from "../utils/helper";
interface Customer {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
}
export async function createCustomer(customer: Customer): Promise<number[]> {
  const { name, surname, email, password, role } = customer;
  const hashedPass = await hashPassword(password)
  const [id] = await db("customer")
    .insert({
      name,
      surname,
      email,
      password: hashedPass,
      role,
    })
    .returning("id");

  return id;
}

