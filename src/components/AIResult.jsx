export default function AIResult({ result, showResult }) {
  if (!showResult) return null

  return (
    <section className="ai-oracle">
      <div className="oracle-header">
        <div>
          <span className="eyebrow">SYNTHESIS COMPLETE</span>
          <h2>AI comparison intelligence</h2>
        </div>
        <span className="oracle-chip">LOCAL MODEL</span>
      </div>
      <p>{result}</p>
      <div className="oracle-foot">
        <span>Evidence-aware summary</span>
        <span>Use alongside official university data</span>
      </div>
    </section>
  )
}