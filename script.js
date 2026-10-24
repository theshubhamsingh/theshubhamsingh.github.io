    :root {
      --font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Display", "San Francisco", "Helvetica Neue", sans-serif;
      --font-mono: "SF Mono", "Fira Code", "Menlo", monospace;
      --bg: #0a0a0c;
      --text-main: #f5f5f7;
      --text-muted: #86868b;
      --accent: #0071e3;
      --glass-bg: rgba(255, 255, 255, 0.04);
      --glass-border: rgba(255, 255, 255, 0.08);
      --blob-1: #432c7a;
      --blob-2: #1e3a5f;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    body {
      font-family: var(--font-sans);
      background-color: var(--bg);
      color: var(--text-main);
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    /* Ambient Developer Background */
    .bg { position: fixed; inset: 0; z-index: -1; overflow: hidden; background: #000; }
    .blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.6;
      animation: float 20s ease-in-out infinite alternate;
    }
    .blob.b1 { width: 40vw; height: 40vw; background: var(--blob-1); top: -10%; left: -10%; }
    .blob.b2 { width: 50vw; height: 50vw; background: var(--blob-2); bottom: -20%; right: -10%; animation-delay: -5s; }
    @keyframes float { 100% { transform: translate(10vw, 10vh) scale(1.1); } }

    /* Content Architecture Grid & Layout */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 4rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    /* Apple Developer Inspired Glassmorphism */
    .glass {
      background: var(--glass-bg);
      backdrop-filter: blur(40px);
      -webkit-backdrop-filter: blur(40px);
      border: 1px solid var(--glass-border);
      border-radius: 1.5rem;
      padding: 3rem;
    }

    /* Hero Section */
    .hero {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.9rem;
      color: var(--text-muted);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    h1 {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 700;
      letter-spacing: -0.04em;
      line-height: 1.05;
      background: linear-gradient(135deg, #fff, #a1a1a6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero p {
      font-size: clamp(1.1rem, 2vw, 1.4rem);
      color: var(--text-muted);
      max-width: 600px;
    }

    /* CodePen-style Terminal Element */
    .terminal {
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 0.75rem;
      padding: 1.5rem;
      font-family: var(--font-mono);
      font-size: 0.95rem;
      color: #00ff41;
      box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
      margin-top: 1rem;
    }
    .terminal .comment { color: #6c757d; }
    .terminal .keyword { color: #ff7b72; }
    .terminal .string { color: #a5d6ff; }

    /* Bento Box Layout for Skills & Projects */
    .bento-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    .bento-card {
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: transform 0.3s ease, background 0.3s ease;
    }
    .bento-card:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.06);
    }
    .bento-card h2 {
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: -0.02em;
    }

    /* footer.design Inspired Oversized Footer */
    footer {
      margin-top: 6rem;
      padding: 6rem 2rem 4rem;
      border-top: 1px solid var(--glass-border);
      background: rgba(0,0,0,0.2);
    }
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 4rem;
    }
    .footer-huge {
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 700;
      letter-spacing: -0.05em;
      line-height: 0.9;
      margin-bottom: 2rem;
    }
    .footer-huge a {
      color: var(--text-main);
      text-decoration: none;
      transition: color 0.3s;
    }
    .footer-huge a:hover { color: var(--accent); }
    .footer-links h3 {
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
      text-transform: uppercase;
    }
    .footer-links ul { list-style: none; display: flex; flex-direction: column; gap: 1rem; }
    .footer-links a {
      color: var(--text-main);
      text-decoration: none;
      font-size: 1.1rem;
      transition: opacity 0.2s;
    }
    .footer-links a:hover { opacity: 0.6; }

    @media (max-width: 768px) {
      .footer-content { grid-template-columns: 1fr; gap: 2.5rem; }
    }
