import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="w-64 min-h-screen">
            <div className="h-full p-4 overflow-y-auto bg-[#111] shadow-lg flex flex-col justify-between">
                <div>
                    <ul className="space-y-4 text-base">
                        <li>
                            <p className="text-gray-300 text-center">v0.0.0 &mdash; BetaTest</p>
                        </li>
                        <li>
                            <Link href="/dashboard" className="transition-all duration-200 hover:bg-transparent text-gray-300 hover:text-blue-600">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/account" className="transition-all duration-200 hover:bg-transparent text-gray-300 hover:text-blue-600">
                                Account
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard" className="transition-all duration-200 hover:bg-transparent text-gray-300 hover:text-blue-600">
                                Settings
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}