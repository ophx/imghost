import Sidebar from "@/components/Sidebar";

export default async function Dashboard() {
    return (
        <>
            <div className="flex w-full">
                {/* Sidebar */}
                <Sidebar />

                {/* Main */}
                <div className="p-4 w-full space-y-4"></div>
            </div>
        </>
    )
}