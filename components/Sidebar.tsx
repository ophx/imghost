import Link from "next/link";

export default function Sidebar() {
    return (
        <ul className="space-y-4 p-4 w-64 min-h-screen bg-gray-900 shadow-lg text-base">
            <li>
                <Link href="/dashboard" className="transition-all duration-200 hover:bg-transparent text-gray-300 hover:text-blue-600">
                    Dashboard
                </Link>
            </li>
            <li>
                <Link href="/dashboard" className="transition-all duration-200 hover:bg-transparent text-gray-300 hover:text-blue-600">
                    Settings
                </Link>
            </li>
        </ul>
    )
}