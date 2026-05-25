import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import collegeData from "../data/collegeData"

export default function Comparison() {

    const { slug } = useParams()

    const parts = slug.split("-vs-")

    const college1 = collegeData[parts[0]]
    const college2 = collegeData[parts[1]]

    return (

        <div className="min-h-screen bg-black text-white overflow-hidden relative">

            {/* Background Glow */}
            <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center text-center mt-32 px-6 relative z-10">

                <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-400 mb-8">
                    Dynamic AI Comparison Page
                </div>

                {/* Dynamic Title */}
                <h1 className="text-7xl font-bold leading-tight max-w-6xl">

                    {college1?.name} vs {college2?.name}

                </h1>

                <p className="text-zinc-400 mt-8 text-2xl max-w-3xl leading-relaxed">
                    Real AI-powered college comparison results generated dynamically.
                </p>

                {/* Main Comparison Card */}
                <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 max-w-4xl w-full hover:border-blue-500 transition">

                    <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                        AI Verdict
                    </h2>

                    {/* Dynamic Data */}
                    <div className="space-y-8 text-left">

                        <div className="flex justify-between border-b border-zinc-800 pb-4">

                            <span className="text-zinc-400 text-lg">
                                Placements
                            </span>

                            <span className="text-lg font-semibold">
                                {college1?.placements} vs {college2?.placements}
                            </span>

                        </div>

                        <div className="flex justify-between border-b border-zinc-800 pb-4">

                            <span className="text-zinc-400 text-lg">
                                Hostel
                            </span>

                            <span className="text-lg font-semibold">
                                {college1?.hostel} vs {college2?.hostel}
                            </span>

                        </div>

                        <div className="flex justify-between border-b border-zinc-800 pb-4">

                            <span className="text-zinc-400 text-lg">
                                Coding Culture
                            </span>

                            <span className="text-lg font-semibold">
                                {college1?.coding} vs {college2?.coding}
                            </span>

                        </div>

                        <div className="flex justify-between border-b border-zinc-800 pb-4">

                            <span className="text-zinc-400 text-lg">
                                Campus Life
                            </span>

                            <span className="text-lg font-semibold">
                                {college1?.campus} vs {college2?.campus}
                            </span>

                        </div>

                        <div className="flex justify-between">

                            <span className="text-zinc-400 text-lg">
                                Overall Verdict
                            </span>

                            <span className="text-lg font-semibold text-blue-500">
                                Depends on Student Priorities
                            </span>

                        </div>

                    </div>

                </div>

                {/* AI Recommendation */}
                <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-zinc-800 rounded-3xl p-8 max-w-4xl w-full">

                    <h2 className="text-3xl font-bold mb-6">
                        AI Recommendation
                    </h2>

                    <p className="text-zinc-300 text-lg leading-relaxed">

                        CompareHub AI recommends choosing colleges based on your goals.

                        {college1?.coding === "Excellent"
                            ? ` ${college1?.name} has a stronger coding culture and tech environment.`
                            : ""
                        }

                        {college2?.campus === "Excellent"
                            ? ` ${college2?.name} offers better campus life and student exposure.`
                            : ""
                        }

                    </p>

                </div>

            </div>

        </div>

    )
}