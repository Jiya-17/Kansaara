export default function HomePage() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="hero">
        <div className="container">
          <div className="hero-meta">
            <span className="mono">EST. 2026</span>
            <span className="mono">INTELLIGENCE & HARDWARE IN SYNC</span>
          </div>
          
          {/* Typographic Hero Node using globals.css clamp sizes */}
          <h1 className="hero-title">
            Architecting the <br />
            <span className="italic">Next Generation</span> <br />
            of Data & AI Portal.
          </h1>

          <div className="hero-foot">
            <p className="lede">
              We engineer advanced multi-agent systems, optimize high-performance data pipelines, 
              and build seamless hardware integrations to power tomorrow's industrial platforms.
            </p>
            <div className="hero-actions">
              <a href="/work" className="btn">
                Explore Work <span className="arrow">→</span>
              </a>
              <a href="/contact" className="btn btn-ghost">
                Let's Build
              </a>
            </div>
          </div>
        </div>

        {/* Global Marquee Rail Loop */}
        <div className="hero-rail">
          <div className="hero-rail-track">
            <span>✦ DATA SCIENCE EXPERTISE ✦ ARTIFICIAL INTELLIGENCE ✦ HARDWARE ENGINEERING ✦ IOT SIMULATION ✦ MULTI-AGENT ARCHITECTURES</span>
            <span>✦ DATA SCIENCE EXPERTISE ✦ ARTIFICIAL INTELLIGENCE ✦ HARDWARE ENGINEERING ✦ IOT SIMULATION ✦ MULTI-AGENT ARCHITECTURES</span>
          </div>
        </div>
      </section>

      {/* ── TRUST & STATS ENGINE ── */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-stats">
            <div className="trust-stat">
              <div className="trust-stat-num">99%</div>
              <div className="trust-stat-label">Accuracy Rate</div>
            </div>
            <div className="trust-stat-slice"></div>
            <div className="trust-stat">
              <div className="trust-stat-num">4+</div>
              <div className="trust-stat-label">Core Modules</div>
            </div>
            <div className="trust-stat">
              <div className="trust-stat-num">24/7</div>
              <div className="trust-stat-label">IoT Monitoring</div>
            </div>
            <div className="trust-stat">
              <div className="trust-stat-num">100%</div>
              <div className="trust-stat-label">Secure Pipelines</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE DIVISIONS ── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-num">// 01</div>
            <div>
              <p className="eyebrow">Our Capabilities</p>
              <h2 className="h-1">Core Operational Divisions</h2>
            </div>
          </div>

          {/* Grid architecture defined in globals.css */}
          <div className="divisions-grid">
            
            {/* Featured Card */}
            <div className="division-card division-card--featured">
              <div className="division-card-top">
                <span className="division-num">DIV_01</span>
                <span className="division-tag">Advanced</span>
              </div>
              <h3 className="division-name">Data Science & Deep Analytics</h3>
              <p className="division-desc">
                From exploratory analysis to validation frameworks. We train high-accuracy models using optimized mathematical solvers, run comprehensive chi-squared distribution benchmarks, and pipeline production-ready feature stores.
              </p>
            </div>

            <div className="division-card">
              <div className="division-card-top">
                <span className="division-num">DIV_02</span>
              </div>
              <h3 className="division-name">AI & LangGraph Systems</h3>
              <p className="division-desc">
                Orchestrating complex, stateful multi-agent architectures for gaming narratives, technical knowledge retrieval, and generative visual production pipelines.
              </p>
            </div>

            <div className="division-card">
              <div className="division-card-top">
                <span className="division-num">DIV_03</span>
              </div>
              <h3 className="division-name">Hardware & Edge IoT</h3>
              <p className="division-desc">
                Firmware simulation using Raspberry Pi Pico and physical microcontrollers. Actuator setups, sensor arrays, and low-latency serial data processing layers.
              </p>
            </div>

            <div className="division-card">
              <div className="division-card-top">
                <span className="division-num">DIV_04</span>
              </div>
              <h3 className="division-name">Full-Stack Interface</h3>
              <p className="division-desc">
                High-performance dashboard architectures constructed with Next.js, React component design systems, and robust CSS variable orchestration.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
