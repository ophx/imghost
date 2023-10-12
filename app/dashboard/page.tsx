import Sidebar from "@/components/Sidebar";

export default async function Dashboard() {
    return (
        <>
            <div className="flex w-full">
                {/* Sidebar */}
                <Sidebar />

                {/* Main */}
                <div className="p-4 w-full space-y-4">
                    <div className="bg-gray-900 rounded-lg shadow-lg p-4">
                        <p className="text-gray-300 text-xl mb-4">Welcome to OphxHost, username!</p>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <p className="text-gray-300 uppercase">Daily Uploads</p>
                                <p className="text-white text-xl">0</p>
                            </div>
                            <div>
                                <p className="text-gray-300 uppercase">MOTD</p>
                                <p className="text-white text-xl">balls</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}