import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { decodeToken } from "@/utils/decodeToken";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
    title: "OphxHost | Gallery",
}

export default async function Account() {
    const token = String(cookies().get("token")?.value);
    const user = decodeToken(token);
    if (!user) redirect("/");

    return (
        <>
            <div className="flex w-full">
                {/* Sidebar */}
                <Sidebar />

                {/* Main */}
                <div className="p-4 w-full space-y-4">
                    <div className="bg-[#111] rounded-lg shadow-lg p-4">
                        <p className="text-gray-300 text-xl mb-4">Gallery</p>
                    </div>
                </div>
            </div>
        </>
    )
}