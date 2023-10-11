import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest, res: NextResponse) {
    const formData = await req.formData();
    const username = formData.get("username")?.toString() as string;
    const password = formData.get("password")?.toString() as string;
    const confirmPassword = formData.get("confirmPassword")?.toString() as string;

    const prisma = new PrismaClient();
    const userFound = await prisma.user.findFirst({
        where: {
            username: username,
        }
    });
    await prisma.$disconnect();

    if (userFound) {
        return NextResponse.json({ type: "ERROR", message: "Username is already taken!" });
    } else {
        if (password == confirmPassword) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            await prisma.user.create({
                data: {
                    username: username,
                    password: hash,
                }
            });
            await prisma.$disconnect();
            return NextResponse.json({ type: "SUCCESS", message: "User created successfully!" });
        } else {
            return NextResponse.json({ type: "ERROR", message: "Passwords do not match!" });
        }
    }
}