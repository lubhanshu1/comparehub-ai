import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Navbar from "../components/Navbar"
import ComparisonCard from "../components/ComparisonCard"
import AIResult from "../components/AIResult"
import collegeData from "../data/collegeData"

export default function Home() {

    const [search, setSearch] = useState("")
    const [result, setResult] = useState("")
    const [showResult, setShowResult] = useState(false)

    const navigate = useNavigate()

    const colleges = Object.keys(collegeData)

    const handleCompare = () => {

        if (search.trim() === "") {
            alert("Please enter colleges to compare")
            return
        }

        const lowerSearch = search.toLowerCase()

        setShowResult(true)

        if (
            lowerSearch.includes("cu") &&
            lowerSearch.includes("lpu")
        ) {

            setResult(
                "Choose Chandigarh University for stronger placements and coding culture. Choose LPU for larger campus life and exposure."
            )

        }

        else if (
            lowerSearch.includes("chitkara") &&
            lowerSearch.includes("amity")
        ) {

            setResult(
                "Choose Chitkara University for stronger academics and placements. Choose Amity for modern infrastructure and student exposure."
            )

        }

        else {

            setResult(
                `AI comparison for "${search}" is coming soon.`
            )

        }

        setTimeout(() => {

            navigate(
                `/comparison/${search
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`
            )

        }, 1500)

    }

    return (

        <div className="min-h-screen bg-black text-white overflow-hidden relative">

            {/* Background Glow */}
            <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center text-center mt-32 px-6 relative z-10">

                <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-400 mb-8">
                    AI-Powered College Comparison Platform
                </div>

                <h1 className="text-7xl font-bold max-w-6xl leading-tight">
                    Compare Colleges
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                        {" "}Smarter
                    </span>
                </h1>

                <p className="text-zinc-400 mt-8 text-xl max-w-3xl leading-relaxed">
                    Compare placements, fees, hostel life,
                    rankings, reviews, and campus culture instantly with AI.
                </p>

                {/* Search */}
                <div className="w-full max-w-3xl mt-12 relative">

                    <input
                        type="text"
                        placeholder="Search cu-vs-lpu"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-6 rounded-3xl bg-zinc-900 border border-zinc-700 outline-none text-lg focus:border-blue-500 transition"
                    />

                    {/* Suggestions */}
                    {search && (

                        <div className="absolute w-full bg-zinc-900 border border-zinc-800 rounded-2xl mt-4 overflow-hidden z-50">

                            {colleges
                                .filter((college) =>
                                    college
                                        .toLowerCase()
                                        .includes(search.toLowerCase())
                                )
                                .slice(0, 5)
                                .map((college) => (

                                    <div
                                        key={college}
                                        onClick={() => setSearch(college)}
                                        className="p-4 border-b border-zinc-800 hover:bg-zinc-800 cursor-pointer transition text-left"
                                    >

                                        {collegeData[college].name}

                                    </div>

                                ))}

                        </div>

                    )}

                </div>

                {/* Buttons */}
                <div className="flex gap-5 mt-10 flex-wrap justify-center">

                    <button
                        onClick={handleCompare}
                        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg transition hover:scale-105"
                    >
                        Start Comparing
                    </button>

                    <button className="border border-zinc-700 hover:bg-zinc-900 px-8 py-4 rounded-2xl font-semibold text-lg transition">
                        Explore Colleges
                    </button>

                </div>

                {/* Live Search */}
                {search && (
                    <p className="mt-6 text-zinc-400 text-lg">
                        Searching for:{" "}
                        <span className="text-blue-500 font-semibold">
                            {search}
                        </span>
                    </p>
                )}

                {/* AI Result */}
                <AIResult
                    result={result}
                    showResult={showResult}
                />

            </div>

            {/* Popular Comparisons */}
            <div className="max-w-7xl mx-auto px-6 mt-32 relative z-10">

                <h2 className="text-5xl font-bold text-center mb-16">
                    Popular Comparisons
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    <ComparisonCard
                        college1="CU"
                        college2="LPU"
                        package1="₹8 LPA"
                        package2="₹6 LPA"
                        hostel1="Good"
                        hostel2="Excellent"
                    />

                    <ComparisonCard
                        college1="Chitkara"
                        college2="Amity"
                        package1="₹7 LPA"
                        package2="₹5 LPA"
                        hostel1="Very Good"
                        hostel2="Good"
                    />

                </div>

            </div>

        </div>

    )
}