export default function TeamPage() {
  return (
    <main className="section">
      <div className="container">
        
        {/* ── Page Header ── */}
        <div className="section-head">
          <div className="section-num">// 05</div>
          <div>
            <p className="eyebrow">The Engineering Brains</p>
            <h1 className="h-1 serif">Operational Registry</h1>
          </div>
        </div>

        {/* ── Team Directory Layout ── */}
        <div className="divisions-grid" style={{ marginTop: '3rem' }}>
          
          {/* Core Member */}
          <div className="division-card division-card--featured">
            <div className="division-card-top">
              <span className="mono" style={{ color: 'var(--brand-gold)' }}>CORE_ENG</span>
              <span className="division-tag">Lead</span>
            </div>
            <h3 className="serif h-2" style={{ margin: '0.5rem 0' }}>Kansaara Architect</h3>
            <p className="mono" style={{ fontSize: '0.85rem', color: 'var(--brand-gold)', marginBottom: '1rem' }}>
              Systems Orchestrator & AI Engineer
            </p>
            <p className="division-desc">
              Managing end-to-end data pipelines, optimizing logistical network solvers, and integrating hardware loops with smart AI agents.
            </p>
          </div>

          {/* Infrastructure Node */}
          <div className="division-card">
            <div className="division-card-top">
              <span className="mono">NODE_02</span>
              <span className="division-tag" style={{ background: '#1c2b3a', color: '#fff' }}>Automation</span>
            </div>
            <h3 className="serif h-3" style={{ margin: '0.5rem 0' }}>AI & Agentic Agents</h3>
            <p className="mono" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Virtual Workforce
            </p>
            <p className="division-desc">
              Autonomous agents running on stateful LangGraph pipelines designed to auto-generate assets and maintain codebase structures.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
