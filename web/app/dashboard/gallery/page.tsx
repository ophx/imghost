import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { decodeToken } from "@/utils/decodeToken";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
    title: "OphxHost | Gallery",
}

export default async function Gallery() {
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
                        <div className="grid grid-cols-4 gap-4">
                            <div className="flex flex-col">
                                <div className="bg-[#222] rounded-t-lg shadow-lg p-4">
                                    <Image
                                        src=""
                                        height={1000}
                                        width={1000}
                                        className="h-44 max-h-44 w-full rounded-lg shadow-lg"
                                        alt="Could not find image"
                                    />
                                </div>
                                <div className="bg-[#333] rounded-b-lg shadow-lg p-4 space-y-2">
                                    <p className="text-white">null.png <span className="text-gray-300">(0 KiB)</span></p>
                                    <div className="flex items-center gap-4">
                                        <button className="btn bg-blue-600 hover:bg-blue-700 border-none text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5v-3.379a3 3 0 00-.879-2.121l-3.12-3.121a3 3 0 00-1.402-.791 2.252 2.252 0 011.913-1.576A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z" clipRule="evenodd" />
                                                <path d="M3.5 6A1.5 1.5 0 002 7.5v9A1.5 1.5 0 003.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L8.44 6.439A1.5 1.5 0 007.378 6H3.5z" />
                                            </svg>
                                        </button>
                                        <button className="btn bg-red-600 hover:bg-red-700 border-none text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}