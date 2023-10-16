"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-80 min-h-screen p-4">
            <div className="h-full p-4 overflow-y-auto bg-[#111] rounded-lg shadow-lg flex flex-col justify-between">
                <div>
                    <ul className="space-y-4 text-base">
                        <li>
                            <p className="text-white text-lg text-center">OphxHost</p>
                            <p className="text-gray-300 text-center">Beta</p>
                        </li>
                        <li>
                            <Link href="/dashboard" className={`transition-all duration-200 ${pathname == "/dashboard" ? "hover:bg-transparent text-blue-600" : "hover:bg-transparent text-gray-300 hover:text-blue-600"}`}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/account" className={`transition-all duration-200 ${pathname == "/dashboard/account" ? "hover:bg-transparent text-blue-600" : "hover:bg-transparent text-gray-300 hover:text-blue-600"}`}>
                                Account
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/gallery" className={`transition-all duration-200 ${pathname == "/dashboard/gallery" ? "hover:bg-transparent text-blue-600" : "hover:bg-transparent text-gray-300 hover:text-blue-600"}`}>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/settings" className={`transition-all duration-200 ${pathname == "/dashboard/settings" ? "hover:bg-transparent text-blue-600" : "hover:bg-transparent text-gray-300 hover:text-blue-600"}`}>
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link href="/api/logout" className={`transition-all duration-200 ${pathname == "/api/logout" ? "hover:bg-transparent text-blue-600" : "hover:bg-transparent text-gray-300 hover:text-blue-600"}`}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}