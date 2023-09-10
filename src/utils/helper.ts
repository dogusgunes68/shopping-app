import bcrypt from "bcrypt";

export const hashPassword = async function (password: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};


export function isObject(obj: any): boolean {
  return (obj !== null && obj !== undefined && typeof obj === "object" && !Array.isArray(obj))
}

export function isString(obj: any): boolean {
  return (obj !== null && obj !== undefined && typeof obj === "string" && !Array.isArray(obj))
}

export function isBoolean(obj: any): boolean {
  return (obj !== null && obj !== undefined && typeof obj === "boolean" && !Array.isArray(obj))
}
