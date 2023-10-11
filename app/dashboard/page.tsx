import Sidebar from "@/components/Sidebar";

export default async function Dashboard() {
    return (
        <>
            <div className="flex w-full">
                {/* Sidebar */}
                <Sidebar />

                <div className="p-4">
                    <p className="text-white">content</p>
                </div>
            </div>
        </>
    )
}