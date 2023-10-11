import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

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
        return NextResponse.json({ type: "SUCCESS", message: "Logged in successfully!", user: userFound });
    } else {
        return NextResponse.json({ type: "ERROR", message: "Username was not found!" });
    }
}