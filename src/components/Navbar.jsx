import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav-shell">
      <Link to="/" className="brand" aria-label="CompareHub AI home">
        <span className="brand-mark">CH</span>
        <span>
          <strong>CompareHub</strong><em>AI</em>
        </span>
      </Link>

      <div className="nav-meta">
        <span className="status-dot" /> Decision Intelligence Engine
      </div>

      <Link to="/" className="nav-cta">Launch comparison <span>↗</span></Link>
    </nav>
  )
}