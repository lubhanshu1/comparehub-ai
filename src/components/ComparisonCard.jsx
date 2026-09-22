export default function ComparisonCard({ college1, college2, package1, package2, hostel1, hostel2, onClick }) {
  return (
    <button className="compare-card" onClick={onClick}>
      <div className="card-top">
        <span className="eyebrow">LIVE COMPARISON</span>
        <span className="arrow">↗</span>
      </div>
      <div className="vs-grid">
        <div>
          <h3>{college1}</h3>
          <p>Placement signal <b>{package1}</b></p>
          <p>Hostel signal <b>{hostel1}</b></p>
        </div>
        <div className="vs-badge">VS</div>
        <div className="right">
          <h3>{college2}</h3>
          <p>Placement signal <b>{package2}</b></p>
          <p>Hostel signal <b>{hostel2}</b></p>
        </div>
      </div>
      <div className="card-footer">
        <span>Multi-factor analysis</span>
        <span>Open →</span>
      </div>
    </button>
  )
}