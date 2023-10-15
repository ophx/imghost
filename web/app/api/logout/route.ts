import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest, res: NextResponse) {
    cookies().delete("token")
    redirect("/");
}