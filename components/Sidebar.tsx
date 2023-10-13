import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="w-64 min-h-screen">
            <div className="h-full p-4 overflow-y-auto bg-[#111] shadow-lg flex flex-col justify-between">
                <div>
                    <ul className="space-y-4 text-base">
                        <li>
                            <p className="text-gray-300">v0.0.0 &mdash; BetaTest</p>
                        </li>
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
                </div>
                <div>
                    <div className="bg-[#222] p-4 rounded-lg shadow-lg flex items-center">
                        <div>
                            <Image
                                src="https://cdn.discordapp.com/avatars/459738097622712320/a_a3094d93bbc01dd74140e768abc59203.webp?size=4096"
                                height={40}
                                width={40}
                                className="rounded-full shadow-lg mr-4"
                                alt="ophx"
                            />
                        </div>
                        <div>
                            <p className="text-white">ophx</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}