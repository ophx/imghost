import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import moment from "moment";
import { decodeToken } from "@/utils/decodeToken";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
    title: "OphxHost | Account",
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
                        <p className="text-gray-300 text-xl mb-4">Settings</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#222] rounded-lg shadow-lg p-4 space-y-2">
                                <p className="text-gray-300 text-xl">Account</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <button className="btn bg-[#5865F2] hover:bg-[#5865F2] border-none text-white w-full">
                                            Link Discord Account
                                        </button>
                                    </div>
                                    <div>
                                        <button className="btn bg-blue-600 hover:bg-blue-700 border-none text-white w-full">
                                            Change Username
                                        </button>
                                    </div>
                                    <div>
                                        <button className="btn bg-blue-600 hover:bg-blue-700 border-none text-white w-full">
                                            Change Password
                                        </button>
                                    </div>
                                    <div>
                                        <button className="btn bg-red-600 hover:bg-red-700 border-none text-white w-full">
                                            Delete Account
                                        </button>
                                    </div>
                                    <div>
                                        <button className="btn bg-red-600 hover:bg-red-700 border-none text-white w-full">
                                            Wipe Files
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