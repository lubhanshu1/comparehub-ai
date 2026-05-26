export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-6 border-b border-zinc-800 backdrop-blur-xl relative z-10">

            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                CompareHub AI
            </h1>

            <button className="bg-white text-black px-5 py-2 rounded-2xl font-semibold hover:scale-105 transition duration-300">
                Compare Now
            </button>

        </nav>
    )
}