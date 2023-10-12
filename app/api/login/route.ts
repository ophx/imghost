import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest, res: NextResponse) {
    const formData = await req.formData();
    const username = formData.get("username")?.toString() as string;
    const password = formData.get("password")?.toString() as string;

    const prisma = new PrismaClient();
    const userFound = await prisma.user.findFirst({
        where: {
            username: username,
        }
    });
    await prisma.$disconnect();

    if (userFound) {
        const validPassword = await bcrypt.compare(password, userFound.password);
        if (!validPassword) return NextResponse.json({ type: "ERROR", message: "Invalid password!" });

        const tokenData = {
            id: userFound.id,
            uuid: userFound.uuid,
        }
        const token = await jwt.sign(tokenData, "fd90s8329dfoisjkhoifd9009982jojsaojd", { expiresIn: "1d" });
        const response = NextResponse.json({ type: "SUCCESS", message: "Logged in successfully!" });
        response.cookies.set("token", token, { httpOnly: true });
        
        return response;
    } else {
        return NextResponse.json({ type: "ERROR", message: "Username was not found!" });
    }
}