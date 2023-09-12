import { Admin } from "../models/admin";
import { checkPasswordForAdmin, createAdmin, getAdmin } from "./admin";
import jwt from "jsonwebtoken";
import config from "../config/auth";

function createAdminToken(admin: Admin){
    return jwt.sign({user: admin}, config.jwt_secret, {
        expiresIn: config.jwt_expires,
    });
}

export async function loginAdmin(admin: Admin){
    const { email, password } = admin;
    const givenAdmin = await getAdmin(email);
    
    const correctPassword = await checkPasswordForAdmin(password, email);
    if (givenAdmin && correctPassword){        
        const token = createAdminToken(givenAdmin);
        return token;
    }
    return null;
}

export async function registerAdmin(admin: Admin){
    const id = await createAdmin(admin);
    return id;
}



