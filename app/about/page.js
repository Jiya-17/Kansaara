export default function AboutPage() {
  return (
    <main className="section">
      <div className="container">
        
        {/* ── Page Header ── */}
        <div className="section-head">
          <div className="section-num">// 02</div>
          <div>
            <p className="eyebrow">The Core Mission</p>
            <h1 className="h-1 serif">Engineering Intelligence & Infrastructure</h1>
          </div>
        </div>

        {/* ── Narrative Content ── */}
        <div className="contact-grid" style={{ marginTop: '3rem' }}>
          <div>
            <p className="lede" style={{ marginBottom: '2rem' }}>
              We specialize in bridging the gap between theoretical data science structures and practical, hardened edge deployments. Our frameworks are engineered from the ground up to handle high-throughput analytical computation.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Whether it is orchestrating stateful multi-agent generative systems via LangGraph or building low-latency communication layers between microcontrollers and local interfaces, we focus on modular correctness and extreme structural optimization.
            </p>
          </div>

          {/* Technical Timelines / Pillars */}
          <div className="contact-side" style={{ background: 'var(--surface-muted)', padding: '2rem', borderRadius: '8px' }}>
            <h3 className="serif h-3" style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>Technical Core</h3>
            
            <div style={{ marginBottom: '1.5rem', borderLeft: '2px solid var(--accent)', paddingLeft: '1rem' }}>
              <p className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>01 / ANALYTICS</p>
              <h4 style={{ margin: '0.2rem 0' }}>Data Foundations & Benchmarks</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Statistical validation using Chi-Squared models and fine-tuned distribution analysis solvers.</p>
            </div>

            <div style={{ marginBottom: '1.5rem', borderLeft: '2px solid var(--accent)', paddingLeft: '1rem' }}>
              <p className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>02 / AGENTICS</p>
              <h4 style={{ margin: '0.2rem 0' }}>Autonomous Architectures</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>State-management frameworks built for programmatic narrative flows and structural execution.</p>
            </div>

            <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '1rem' }}>
              <p className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>03 / HARDWARE</p>
              <h4 style={{ margin: '0.2rem 0' }}>Firmware & Edge Computing</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Actuator integrations, sensor networking, and responsive serial event loops.</p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
