import { Link, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import collegeData from "../data/collegeData"

const metrics = [
  ["Placements", "placements"],
  ["Hostel", "hostel"],
  ["Coding Culture", "coding"],
  ["Campus Life", "campus"],
]

function parseSlug(slug = "") {
  const parts = slug.split("-vs-")
  return [collegeData[parts[0]], collegeData[parts[1]]]
}

function signalLevel(value) {
  return ["Excellent", "Very Good", "Good"].indexOf(value)
}

export default function Comparison() {
  const { slug } = useParams()
  const [college1, college2] = parseSlug(slug)

  if (!college1 || !college2) {
    return (
      <div className="app-shell">
        <Navbar />
        <main className="empty-state">
          <span className="eyebrow">ERROR 404</span>
          <h1>Comparison pair not found.</h1>
          <Link to="/">Return to CompareHub</Link>
        </main>
      </div>
    )
  }

  return (
    <div className="app-shell">
      <div className="noise" />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <Navbar />

      <main className="comparison-page">
        <div className="comparison-hero">
          <span className="hero-kicker"><span className="status-dot" /> ANALYSIS SESSION // ACTIVE</span>
          <h1>{college1.name}<span> vs </span>{college2.name}</h1>
          <p>Multi-signal comparison cockpit. The interface surfaces the dataset you loaded; treat each value as a signal, not a universal verdict.</p>
        </div>

        <section className="duel">
          <div className="duel-card left"><span>ENTITY A</span><h2>{college1.name}</h2><strong>{college1.placements}</strong><small>placement signal</small></div>
          <div className="duel-core">VS</div>
          <div className="duel-card right"><span>ENTITY B</span><h2>{college2.name}</h2><strong>{college2.placements}</strong><small>placement signal</small></div>
        </section>

        <section className="intel-grid">
          <div className="matrix-panel">
            <div className="panel-title"><span>COMPARISON MATRIX</span><span>04 SIGNALS</span></div>
            {metrics.map(([label, key]) => {
              const v1 = college1[key]
              const v2 = college2[key]
              return (
                <div className="matrix-row" key={key}>
                  <span>{label}</span>
                  <div><b>{v1}</b><i style={{"--size": `${Math.max(26, (signalLevel(v1) + 1) * 25)}%`}} /></div>
                  <div><b>{v2}</b><i style={{"--size": `${Math.max(26, (signalLevel(v2) + 1) * 25)}%`}} /></div>
                </div>
              )
            })}
          </div>

          <aside className="insight-panel">
            <span className="eyebrow">EXPLAINABLE AI</span>
            <h2>What this comparison is telling you</h2>
            <p>
              {college1.name} and {college2.name} have different profiles across the available signals. Rather than collapsing those signals into one opaque number, use the matrix to see where the trade-offs appear.
            </p>
            <div className="insight-list">
              <div><span>Highest signal A</span><b>{college1.placements}</b></div>
              <div><span>Highest signal B</span><b>{college2.placements}</b></div>
              <div><span>Decision lens</span><b>Priority-based</b></div>
            </div>
          </aside>
        </section>

        <section className="reality-panel">
          <span className="eyebrow">EVIDENCE LAYER</span>
          <div>
            <h2>Prototype dataset</h2>
            <p>The current repository uses a local college dataset. For consequential education decisions, enrich each metric with dated official placement reports, fee sheets, accreditation, hostel policies, and branch-level outcomes.</p>
          </div>
        </section>

        <Link to="/" className="back-link">← Back to decision cockpit</Link>
      </main>
    </div>
  )
}