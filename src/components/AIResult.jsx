export default function AIResult({ result, showResult }) {

    if (!showResult) return null

    return (
        <div className="mt-10 max-w-4xl bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                AI Comparison Result
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed">
                {result}
            </p>

        </div>
    )
}