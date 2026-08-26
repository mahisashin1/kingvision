import './App.css'

const navItems = ['Indicators', 'Features', 'Pricing', 'Download', 'FAQ']

const brandName = 'King Vision Bot'

const stats = [
  { value: '1.2M+', label: 'trades analyzed' },
  { value: '86%', label: 'avg win rate' },
  { value: '30ms', label: 'signal refresh' },
  { value: '24/7', label: 'market coverage' },
]

const features = [
  {
    title: 'Live volume analysis',
    text: 'Spot market intent before the move and react with cleaner timing.',
    icon: '◉',
  },
  {
    title: 'Multi-market coverage',
    text: 'Forex, crypto, metals and major indices from one control panel.',
    icon: '◎',
  },
  {
    title: 'Signal clarity',
    text: 'No noise. Clear entries, confidence ranges and activity intensity.',
    icon: '△',
  },
  {
    title: 'Fast setup',
    text: 'Install once, connect your account and start trading with context.',
    icon: '⚡',
  },
]

const steps = [
  `Install ${brandName} on your device and connect your broker account.`,
  'Watch the live indicator respond to real-time volume and momentum shifts.',
  'Execute with better timing, clearer confirmation and stronger discipline.',
]

const pricing = [
  {
    name: 'Starter',
    price: '$19',
    tag: 'Monthly',
    best: false,
    perks: ['Basic signals', 'Forex + crypto', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$39',
    tag: 'Most popular',
    best: true,
    perks: ['Everything in Starter', 'Advanced volume overlays', 'Priority support'],
  },
  {
    name: 'Elite',
    price: '$79',
    tag: 'VIP',
    best: false,
    perks: ['Everything in Pro', 'Advanced alerts', 'Private community access'],
  },
]

const faqs = [
  {
    q: `Is ${brandName} suitable for beginners?`,
    a: 'Yes. The indicator is designed to simplify reading volume and momentum without overwhelming the chart.',
  },
  {
    q: 'Which markets are supported?',
    a: `${brandName} focuses on major forex pairs, metals and select crypto pairs with fast market coverage.`,
  },
  {
    q: 'Does it work with broker accounts?',
    a: 'The interface is built to support broker workflows and quick signal confirmation for active trading.',
  },
  {
    q: 'Do I need a powerful PC?',
    a: 'No. The app is light, fast and optimized for a smooth desktop trading setup.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar container">
        <div className="brand" aria-label="KingVision logo">
          <span className="brand-mark">K</span>
          <span>{brandName}</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" className="lang-pill">
            EN
          </button>
          <button type="button" className="primary-btn small-btn">
            Get started
          </button>
        </div>
      </header>

      <main className="container">
        <section className="hero" id="indicators">
          <div className="hero-copy">
            <span className="eyebrow">Professional Volume Indicator</span>
            <h1>Transform your results with clear market intent.</h1>
            <p>
              {brandName} helps traders read real-time volume, momentum and signal confidence
              so every entry is backed by clearer context.
            </p>

            <div className="cta-row">
              <button type="button" className="primary-btn">
                Download for Windows
              </button>
              <button type="button" className="secondary-btn">
                See pricing
              </button>
            </div>

            <div className="micro-trust">
              <span>4.9/5 trader rating</span>
              <span>Live signals</span>
              <span>Broker-ready</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="KingVision dashboard preview">
            <div className="dashboard-card glow-card">
              <div className="card-header">
                <span className="status-dot" />
                <span>{brandName} live</span>
              </div>

              <div className="asset-row">
                <div>
                  <small>Pair</small>
                  <strong>EUR/USD</strong>
                </div>
                <div className="pill success">BUY</div>
              </div>

              <div className="chart-bars" aria-hidden="true">
                <span style={{ height: '28%' }} />
                <span style={{ height: '42%' }} />
                <span style={{ height: '50%' }} />
                <span style={{ height: '65%' }} />
                <span style={{ height: '58%' }} />
                <span style={{ height: '80%' }} />
                <span style={{ height: '96%' }} />
                <span style={{ height: '100%' }} />
                <span style={{ height: '88%' }} />
                <span style={{ height: '94%' }} />
              </div>

              <div className="stats-mini">
                <div>
                  <small>Win rate</small>
                  <strong>86.7%</strong>
                </div>
                <div>
                  <small>Latency</small>
                  <strong>18ms</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip" aria-label="Key metrics">
          {stats.map((item) => (
            <div key={item.label} className="stat-box">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="feature-section" id="features">
          <div className="section-heading">
            <span className="eyebrow">Why traders choose {brandName}</span>
            <h2>Built for no-noise signal reading.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="workflow-section">
          <div className="section-heading left-align">
            <span className="eyebrow">How it works</span>
            <h2>Simple flow. Better timing.</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={step} className="step-item">
                <span className="step-number">0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="comparison-section">
          <div className="compare-panel negative">
            <h3>Without {brandName}</h3>
            <ul>
              <li>Guessing entries</li>
              <li>Lagging on market shifts</li>
              <li>Too much noise</li>
            </ul>
          </div>

          <div className="compare-panel positive">
            <h3>With {brandName}</h3>
            <ul>
              <li>Clearer signal context</li>
              <li>Better execution timing</li>
              <li>More disciplined trade setup</li>
            </ul>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="section-heading center">
            <span className="eyebrow">Flexible plans</span>
            <h2>Choose the plan that fits your trading style.</h2>
          </div>

          <div className="pricing-grid">
            {pricing.map((plan) => (
              <article key={plan.name} className={`price-card ${plan.best ? 'featured' : ''}`}>
                <div className="plan-header">
                  <span>{plan.name}</span>
                  {plan.best && <em>{plan.tag}</em>}
                </div>
                <div className="price-line">
                  <strong>{plan.price}</strong>
                  <small>{plan.tag}</small>
                </div>
                <ul>
                  {plan.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                <button type="button" className={plan.best ? 'primary-btn full' : 'secondary-btn full'}>
                  Choose plan
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="section-heading center">
            <span className="eyebrow">FAQ</span>
            <h2>Frequently asked questions.</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((item) => (
              <article key={item.q} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-banner" id="download">
          <div>
            <span className="eyebrow light">Ready to upgrade your process?</span>
            <h2>Start using {brandName} today.</h2>
          </div>
          <button type="button" className="primary-btn">
            Download app
          </button>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <div className="brand footer-brand" aria-label="KingVision logo">
              <span className="brand-mark">K</span>
              <span>{brandName}</span>
            </div>
            <p>Professional volume indicator for smarter trading decisions.</p>
          </div>

          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#download">Download</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
