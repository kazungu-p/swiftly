import React from "react"
import { Link } from "react-router-dom"
import "../assets/styles/home.css"

const features = [
  {
    icon: "⚡",
    title: "Instant transfers",
    desc: "Send money to anyone in seconds. No delays, no holds, no nonsense."
  },
  {
    icon: "🔒",
    title: "Bank-grade security",
    desc: "256-bit encryption, fraud detection, and two-factor authentication built in."
  },
  {
    icon: "🌍",
    title: "Global reach",
    desc: "Send and receive in 40+ currencies across 180 countries, with live exchange rates."
  },
  {
    icon: "💸",
    title: "Zero hidden fees",
    desc: "Personal transfers are always free. Business plans start at $0/month."
  },
  {
    icon: "📱",
    title: "Works everywhere",
    desc: "iOS, Android, browser — your money moves with you, anywhere you are."
  },
  {
    icon: "🤝",
    title: "Request & split",
    desc: "Split bills, request payment, or create payment links in seconds."
  }
]

const stats = [
  { value: "50M+", label: "Active users" },
  { value: "$2B+", label: "Processed monthly" },
  { value: "180", label: "Countries supported" },
  { value: "0%", label: "Fees on personal sends" },
]

const testimonials = [
  {
    quote: "Swiftly completely changed how I pay my freelancers abroad. What used to take 3 days now takes 3 seconds.",
    name: "Aria Mensah",
    role: "Creative Director, Lagos"
  },
  {
    quote: "I've tried every payment app. Swiftly is the only one that actually feels fast. And the fees? Almost nothing.",
    name: "Tom Keller",
    role: "Entrepreneur, Berlin"
  },
  {
    quote: "My whole team uses it. Splitting expenses for work trips has never been this painless.",
    name: "Priya Nair",
    role: "Product Manager, Bengaluru"
  }
]

export default function Home() {
  return (
    <main className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero__bg-grid" aria-hidden="true" />
        <div className="hero__content">
          <div className="hero__badge">Now available in 180 countries</div>
          <h1 className="hero__headline">
            Money moves at<br />
            <span className="hero__accent">the speed of now</span>
          </h1>
          <p className="hero__sub">
            Send, receive, and spend — instantly, globally, for free.
            Swiftly is the payment platform built for how people actually live.
          </p>
          <div className="hero__cta">
            <Link to="/signup" className="btn btn--primary btn--xl">Get started free</Link>
            <a href="#how-it-works" className="btn btn--ghost btn--large">See how it works</a>
          </div>
          <p className="hero__disclaimer">No credit card required. Free forever for personal use.</p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="mock-card mock-card--main">
            <div className="mock-card__header">
              <span className="mock-card__label">Your balance</span>
              <span className="mock-card__menu">···</span>
            </div>
            <div className="mock-card__balance">$12,480.00</div>
            <div className="mock-card__sub">+$240.00 today</div>
            <div className="mock-card__actions">
              <div className="mock-action">
                <div className="mock-action__icon">↑</div>
                <span>Send</span>
              </div>
              <div className="mock-action">
                <div className="mock-action__icon">↓</div>
                <span>Request</span>
              </div>
              <div className="mock-action">
                <div className="mock-action__icon">+</div>
                <span>Add</span>
              </div>
            </div>
          </div>

          <div className="mock-card mock-card--notif">
            <div className="mock-notif__dot" />
            <div>
              <p className="mock-notif__title">Payment received</p>
              <p className="mock-notif__sub">+$85.00 from James O.</p>
            </div>
          </div>

          <div className="mock-card mock-card--send">
            <div className="mock-send__row">
              <div className="mock-avatar mock-avatar--a">AM</div>
              <div className="mock-send__info">
                <p>Aria M.</p>
                <span>Just now · $240</span>
              </div>
              <div className="mock-send__badge">✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stats__inner">
          {stats.map((s) => (
            <div key={s.label} className="stats__item">
              <div className="stats__value">{s.value}</div>
              <div className="stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features" id="how-it-works">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-eyebrow">Why Swiftly</p>
            <h2 className="section-title">Everything you need.<br />Nothing you don't.</h2>
          </div>
          <div className="features__grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-card__icon">{f.icon}</div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="steps">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-eyebrow">How it works</p>
            <h2 className="section-title">Up and running<br />in 60 seconds</h2>
          </div>
          <div className="steps__list">
            <div className="step">
              <div className="step__num">01</div>
              <div className="step__body">
                <h3>Create your account</h3>
                <p>Sign up with your email. No paperwork, no branch visits. Done in under a minute.</p>
              </div>
            </div>
            <div className="step__connector" aria-hidden="true" />
            <div className="step">
              <div className="step__num">02</div>
              <div className="step__body">
                <h3>Link your bank or card</h3>
                <p>Connect securely in seconds. We support all major banks, debit and credit cards.</p>
              </div>
            </div>
            <div className="step__connector" aria-hidden="true" />
            <div className="step">
              <div className="step__num">03</div>
              <div className="step__body">
                <h3>Send & receive instantly</h3>
                <p>Enter a name, phone, or email. Hit send. Money arrives before you put your phone down.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-eyebrow">People love Swiftly</p>
            <h2 className="section-title">Trusted by millions,<br />across the globe</h2>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <p className="testimonial-card__quote">"{t.quote}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="testimonial-card__name">{t.name}</p>
                    <p className="testimonial-card__role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="section-inner">
          <div className="cta-banner__inner">
            <h2 className="cta-banner__title">Start sending money<br />the smart way</h2>
            <p className="cta-banner__sub">Join 50 million people who already move money with Swiftly.</p>
            <div className="cta-banner__actions">
              <Link to="/signup" className="btn btn--primary btn--large">Create free account</Link>
              <Link to="/login" className="btn btn--ghost btn--large" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
                Log in
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-inner">
          <div className="footer__top">
            <div className="footer__brand">
              <img src="/images/swiftly logo.png" alt="Swiftly" style={{ height: 32 }} />
              <p>Fast, free, global payments<br />for everyone.</p>
            </div>
            <div className="footer__cols">
              <div className="footer__col">
                <h4>Product</h4>
                <a href="#">Personal</a>
                <a href="#">Business</a>
                <a href="#">Developer API</a>
                <a href="#">Pricing</a>
              </div>
              <div className="footer__col">
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
              </div>
              <div className="footer__col">
                <h4>Support</h4>
                <a href="#">Help center</a>
                <a href="#">Contact us</a>
                <a href="#">Status</a>
                <a href="#">Security</a>
              </div>
              <div className="footer__col">
                <h4>Legal</h4>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Cookies</a>
                <a href="#">Licenses</a>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p>© 2025 Swiftly Inc. All rights reserved.</p>
            <p>Swiftly is not a bank. Payment services provided by licensed partners.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
