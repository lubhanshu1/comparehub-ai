export default function ComparisonCard({
    college1,
    college2,
    package1,
    package2,
    hostel1,
    hostel2,
}) {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 transition">

            <div className="flex justify-between items-center">

                <div>
                    <h2 className="text-3xl font-bold">
                        {college1}
                    </h2>

                    <p className="text-zinc-400 mt-2">
                        Average Package: {package1}
                    </p>

                    <p className="text-zinc-400">
                        Hostel: {hostel1}
                    </p>
                </div>

                <h1 className="text-5xl font-bold text-zinc-700">
                    VS
                </h1>

                <div className="text-right">
                    <h2 className="text-3xl font-bold">
                        {college2}
                    </h2>

                    <p className="text-zinc-400 mt-2">
                        Average Package: {package2}
                    </p>

                    <p className="text-zinc-400">
                        Hostel: {hostel2}
                    </p>
                </div>

            </div>

        </div>
    )
}