import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req: NextRequest, res: NextResponse) {
    const formData = await req.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const inviteCode = formData.get("inviteCode");

    return NextResponse.json({
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        inviteCode: inviteCode,
    });
}