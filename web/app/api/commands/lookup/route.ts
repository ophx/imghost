import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(req: NextRequest, res: NextResponse) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const user = await prisma.user.findFirst({
        where: {
            id: Number(id),
        },
    });

    return NextResponse.json(user);
}