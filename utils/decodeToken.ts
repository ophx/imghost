import jwt from "jsonwebtoken";

export function decodeToken(token: string) {
    try {
        return jwt.verify(token, "fd90s8329dfoisjkhoifd9009982jojsaojd") as { [key: string]: any };
    } catch (err) {
        console.log(err);
    }
}