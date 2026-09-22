import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import ComparisonCard from "../components/ComparisonCard"
import AIResult from "../components/AIResult"
import collegeData from "../data/collegeData"

function slugify(value) {
  return value.trim().toLowerCase().replace(/\\s+vs\\s+/i, "-vs-").replace(/\\s+/g, "-")
}

function parsePair(value) {
  const normalized = value.toLowerCase().trim()
  const parts = normalized.split(/\\s+vs\\s+/i)
  if (parts.length !== 2) return null

  const resolve = (input) => {
    if (collegeData[input]) return input
    const match = Object.entries(collegeData).find(([key, item]) =>
      key.includes(input) || item.name.toLowerCase().includes(input)
    )
    return match?.[0] ?? null
  }

  const left = resolve(parts[0])
  const right = resolve(parts[1])
  return left && right && left !== right ? [left, right] : null
}

const popular = [
  ["cu", "lpu"],
  ["chitkara", "amity"],
  ["vit", "srm"],
  ["bits", "thapar"],
]

export default function Home() {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [result, setResult] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [mode, setMode] = useState("BALANCED")

  const colleges = useMemo(() => Object.entries(collegeData), [])
  const suggestions = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return []
    return colleges.filter(([key, item]) =>
      key.includes(q) || item.name.toLowerCase().includes(q)
    ).slice(0, 6)
  }, [colleges, search])

  const handleCompare = () => {
    const pair = parsePair(search)
    if (!pair) {
      setShowResult(true)
      setResult('Try a query such as "CU vs LPU", "BITS Pilani vs VIT", or pick two suggestions.')
      return
    }

    const [a, b] = pair
    const A = collegeData[a]
    const B = collegeData[b]

    setShowResult(true)
    setResult(
      mode === "PLACEMENTS"
        ? `${A.name} and ${B.name} show different placement signals. Compare the current official placement reports, role mix, and branch-specific outcomes before deciding.`
        : mode === "CAMPUS"
          ? `${A.name} and ${B.name} differ across hostel and campus signals in the current dataset. Match those signals to your own priorities rather than treating them as a universal verdict.`
          : `Compare ${A.name} and ${B.name} across placements, hostel experience, coding culture, and campus environment. Your ideal choice depends on which dimensions matter most to you.`
    )

    window.setTimeout(() => navigate(`/comparison/${a}-vs-${b}`), 350)
  }

  const selectCollege = (key) => {
    if (!search.toLowerCase().includes(" vs ")) {
      setSearch(`${key} vs `)
    }
  }

  return (
    <div className="app-shell">
      <div className="noise" />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <Navbar />

      <main>
        <section className="hero-section">
          <div className="hero-kicker"><span className="status-dot" /> NEXT-GEN COLLEGE DECISION ENGINE</div>
          <h1>See beyond the brochure.<br /><span>Compare with intelligence.</span></h1>
          <p className="hero-copy">
            Compare colleges across multiple signals with an interface built like a mission-control console—not a generic college directory.
          </p>

          <div className="search-console">
            <div className="console-label">
              <span>QUERY INPUT</span><kbd>ENTER</kbd>
            </div>
            <div className="search-row">
              <span className="search-glyph">⌕</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCompare()}
                placeholder='Try "CU vs LPU"'
                aria-label="College comparison search"
              />
              <button onClick={handleCompare}>Analyze <span>↗</span></button>
            </div>

            {suggestions.length > 0 && (
              <div className="suggestions">
                {suggestions.map(([key, item]) => (
                  <button key={key} onClick={() => selectCollege(key)}>
                    <span>{item.name}</span><span>{key.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mode-strip">
            <span>ANALYSIS PROFILE</span>
            {["BALANCED", "PLACEMENTS", "CAMPUS"].map((item) => (
              <button key={item} className={mode === item ? "active" : ""} onClick={() => setMode(item)}>
                {item}
              </button>
            ))}
          </div>

          <AIResult result={result} showResult={showResult} />
        </section>

        <section className="metrics">
          <div><span>01</span><b>50+</b><p>Institutions in the knowledge base</p></div>
          <div><span>02</span><b>4</b><p>Comparison signals surfaced instantly</p></div>
          <div><span>03</span><b>∞</b><p>Priority profiles you can explore</p></div>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <div><span className="eyebrow">CURATED SCENARIOS</span><h2>Explore live comparisons</h2></div>
            <span className="section-index">/ 01</span>
          </div>

          <div className="comparison-grid">
            {popular.map(([a, b]) => {
              const A = collegeData[a]
              const B = collegeData[b]
              return (
                <ComparisonCard
                  key={a + b}
                  college1={A.name}
                  college2={B.name}
                  package1={A.placements}
                  package2={B.placements}
                  hostel1={A.hostel}
                  hostel2={B.hostel}
                  onClick={() => navigate(`/comparison/${a}-vs-${b}`)}
                />
              )
            })}
          </div>
        </section>

        <section className="future-panel">
          <div>
            <span className="eyebrow">ROADMAP // 2.0</span>
            <h2>From comparison tool to personal decision cockpit.</h2>
            <p>Architecture is ready to evolve toward richer scoring, live evidence, personalization, saved comparison boards, and explainable AI workflows.</p>
          </div>
          <div className="roadmap-grid">
            <span>01&nbsp; PERSONALIZED WEIGHTS</span>
            <span>02&nbsp; EVIDENCE LAYERS</span>
            <span>03&nbsp; SAVED BOARDS</span>
            <span>04&nbsp; INTERACTIVE RADAR</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>COMPAREHUB AI // DECISION INTELLIGENCE</span>
        <span>Prototype data • verify critical facts with official sources</span>
      </footer>
    </div>
  )
}