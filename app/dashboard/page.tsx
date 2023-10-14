import Sidebar from "@/components/Sidebar";

export default async function Dashboard() {
    return (
        <>
            <div className="flex w-full">
                {/* Sidebar */}
                <Sidebar />

                {/* Main */}
                <div className="p-4 w-full space-y-4">
                    <div className="bg-[#111] rounded-lg shadow-lg p-4">
                        <p className="text-gray-300 text-xl mb-4">Welcome back, ophx!</p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-[#222] rounded-lg shadow-lg p-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-1 text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                        <span>MOTD</span>
                                    </div>
                                    <div>
                                        <p className="text-white">gay</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#222] rounded-lg shadow-lg p-4">
                                <div className="space-y-2">
                                    <p className="text-gray-300">Configuration</p>
                                    <button className="btn bg-blue-600 hover:bg-blue-700 text-white">
                                        Download ShareX Config
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}