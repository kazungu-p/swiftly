import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "../assets/styles/navbar.css"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="navbar__inner">
        <div className="navbar__left">
          <Link to="/" className="navbar__logo-link">
            <img src="/images/swiftly logo.png" alt="Swiftly" className="navbar__logo" />
          </Link>
          <ul className="navbar__links">
            <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Personal</Link></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Developer</a></li>
          </ul>
        </div>
        <div className="navbar__right">
          <ul className="navbar__links">
            <li><a href="#">Help</a></li>
          </ul>
          <Link to="/login" className="btn btn--ghost">Log In</Link>
          <Link to="/signup" className="btn btn--primary">Sign Up</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
