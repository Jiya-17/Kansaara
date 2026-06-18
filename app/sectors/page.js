export default function SectorsPage() {
  return (
    <main className="section">
      <div className="container">
        
        {/* ── Page Header ── */}
        <div className="section-head">
          <div className="section-num">// 04</div>
          <div>
            <p className="eyebrow">Operational Markets</p>
            <h1 className="h-1 serif">Focus Sectors</h1>
          </div>
        </div>

        {/* ── Sectors Alignment Layout ── */}
        <div className="sectors-grid" style={{ marginTop: '3rem' }}>
          
          <div className="sector-card">
            <div className="sector-card-head">
              <span className="mono" style={{ color: 'var(--brand-gold)' }}>SEC_01</span>
              <div className="sector-arrow">↗</div>
            </div>
            <h3 className="serif h-2">Autonomous <em>Agentics</em></h3>
            <p>
              Designing multi-agent frameworks capable of managing complex, conditional branch states. Perfect for interactive story narrative graphs, automated visual assets workflows, and complex state charts.
            </p>
            <div className="sector-meta">
              <span>LangGraph</span>
              <span>Python</span>
              <span>State Machines</span>
            </div>
          </div>

          <div className="sector-card">
            <div className="sector-card-head">
              <span className="mono" style={{ color: 'var(--brand-gold)' }}>SEC_02</span>
              <div className="sector-arrow">↗</div>
            </div>
            <h3 className="serif h-2">Industrial <em>IoT & Firmware</em></h3>
            <p>
              Prototyping responsive automation environments with physical hardware arrays and simulators. Integrating logic triggers, debounce filtering, and real-time environment telemetry pipelines.
            </p>
            <div className="sector-meta">
              <span>RPi Pico</span>
              <span>Arduino</span>
              <span>Sensor Arrays</span>
            </div>
          </div>

          <div className="sector-card">
            <div className="sector-card-head">
              <span className="mono" style={{ color: 'var(--brand-gold)' }}>SEC_03</span>
              <div className="sector-arrow">↗</div>
            </div>
            <h3 className="serif h-2">Deep Analytics <em>& Math</em></h3>
            <p>
              Building pipelines engineered to compute complex mathematical validations. Tuning statistical solvers, tracking chi-squared distribution arrays, and validating production feature scaling parameters.
            </p>
            <div className="sector-meta">
              <span>Data Science</span>
              <span>Solvers</span>
              <span>Statistical Inference</span>
            </div>
          </div>

          <div className="sector-card">
            <div className="sector-card-head">
              <span className="mono" style={{ color: 'var(--brand-gold)' }}>SEC_04</span>
              <div className="sector-arrow">↗</div>
            </div>
            <h3 className="serif h-2">System <em>Interfaces</em></h3>
            <p>
              Creating lighting-fast user interfaces to manage and visualize background telemetry. Orchestrated with Next.js App Router architectures, custom CSS variables, and modular components.
            </p>
            <div className="sector-meta">
              <span>React</span>
              <span>Next.js</span>
              <span>Tailwind Integration</span>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
