import '../app/globals.css';

export const metadata = {
  title: 'Kansaara Portal',
  description: 'Premium AI, Data Science & Engineering Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts configuration directly feeding design tokens */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Montserrat:wght@500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@500&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        
        {/* ── Global Header & Navigation ── */}
        <header className="nav">
          <div className="nav-inner">
            <div className="nav-brand">
              <span className="mark">K</span> Kansaara
            </div>
            
            <nav className="nav-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/sectors">Sectors</a>
              <a href="/work">Work</a>
              <a href="/team">Team</a>
              <a href="/contact">Contact</a>
            </nav>

            <a href="/contact" className="nav-cta">
              Get In Touch <span className="arrow">→</span>
            </a>
          </div>
        </header>

        {/* ── Dynamic Page Content ── */}
        {children}

        {/* ── Floating WhatsApp Button ── */}
        <a 
          href="https://wa.me/your-number" 
          className="whatsapp-float" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
        >
          💬
        </a>

      </body>
    </html>
  );
}
