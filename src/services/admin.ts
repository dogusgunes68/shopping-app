import db from "../database/db";
import { Admin } from "../models/admin";
import bcrypt from "bcrypt";
import { hashPassword } from "../utils/helper";

export async function createAdmin(admin: Admin): Promise<Admin> {
    const { email, password, role} = admin;
    const hashedPass = await hashPassword(password);
    const [id] = await db("admin").insert({
        email,
        password: hashedPass,
        role
    }).returning("id");
    return id;
}

export async function getAdmin(email: string): Promise<Admin> {
    const [admin] = await db("admin").select("*").where("email", email);

    return admin;
}

export async function checkPasswordForAdmin(password: string, email: string): Promise<boolean> {
    const admin = await getAdmin(email);
    return await bcrypt.compare(password, admin.password);
}