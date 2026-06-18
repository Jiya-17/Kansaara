export default function WorkPage() {
  return (
    <main className="section">
      <div className="container">
        
        {/* ── Page Header ── */}
        <div className="section-head">
          <div className="section-num">// 03</div>
          <div>
            <p className="eyebrow">Case Studies & Benchmarks</p>
            <h1 className="h-1 serif">Engineering Directory</h1>
          </div>
        </div>

        {/* ── Project Showcase Grid ── */}
        <div className="divisions-grid" style={{ marginTop: '3rem' }}>
          
          {/* Project 1: Solver Matrix */}
          <div className="division-card division-card--featured">
            <div className="division-card-top">
              <span className="division-num">PROJECT_01</span>
              <span className="division-tag">Lab Verified</span>
            </div>
            <h3 className="division-name">ML Solver Performance Benchmark</h3>
            <p className="division-desc" style={{ marginBottom: '1.5rem' }}>
              A technical comparison tracking optimization parameters for logistic and linear classifiers across standard validation sets. Benchmarked execution rates for high-dimensional models.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span className="mono" style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>liblinear</span>
              <span className="mono" style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>saga optimization</span>
            </div>
          </div>

          {/* Project 2: Agent Architecture */}
          <div className="division-card">
            <div className="division-card-top">
              <span className="division-num">PROJECT_02</span>
              <span className="division-tag">Agentic AI</span>
            </div>
            <h3 className="division-name">Project X: Multi-Agent Engine</h3>
            <p className="division-desc" style={{ marginBottom: '1.5rem' }}>
              An end-to-end multi-agent orchestration setup deployed using state graphs. Built to manage conditional branch narratives, node synchronization, and asset generation state charts.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span className="mono" style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>LangGraph</span>
              <span className="mono" style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Python Graph State</span>
            </div>
          </div>

          {/* Project 3: Embedded Telemetry */}
          <div className="division-card">
            <div className="division-card-top">
              <span className="division-num">PROJECT_03</span>
              <span className="division-tag">Hardware simulation</span>
            </div>
            <h3 className="division-name">Edge IoT Sensor Array</h3>
            <p className="division-desc" style={{ marginBottom: '1.5rem' }}>
              Firmware prototyping focusing on microcontrollers and responsive sensors. Configured custom signal routines, debounce delays, and real-time status output monitoring.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span className="mono" style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>RPi Pico</span>
              <span className="mono" style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>PIR Array</span>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
