import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

const validKeys = [String(process.env.API_KEY)];
function isValid(key: string | null): boolean {
    return key !== null && validKeys.includes(key);
}

export async function GET(req: NextRequest, res: NextResponse) {
    const { searchParams } = new URL(req.url);
    const key = searchParams.get("key");
    const id = searchParams.get("id");

    if (!isValid(key)) {
        return NextResponse.json("Unauthorized", { status: 401 });
    }
    
    const user = await prisma.user.findFirst({
        where: {
            id: Number(id),
        },
    });

    return NextResponse.json(user);
}