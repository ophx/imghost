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
                        <p className="text-gray-300 text-xl mb-4">Account</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="text-gray-300 uppercase text-sm">UID</p>
                                <input readOnly type="text" value={user?.id} className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-300 uppercase text-sm">Username</p>
                                <input readOnly type="text" value={user?.username} className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-300 uppercase text-sm">Role</p>
                                <input readOnly type="text" value={user?.role} className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-300 uppercase text-sm">UUID</p>
                                <input readOnly type="text" value={user?.uuid} className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-300 uppercase text-sm">Registered</p>
                                <input readOnly type="text" value={moment(user?.createdAt).calendar()} className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}