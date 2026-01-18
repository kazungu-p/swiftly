import React from "react";
import "../assets/styles/navbar.css"

function Navbar(){
    return(
       <header>
        <nav>
            <div className="nav-left">
                <img src="/images/swiftly logo.png" alt="swiftly logo" className="logo" />
                <ul>
                    <li>Personal</li>
                    <li>Business</li>
                    <li>Developer</li>
                </ul>
            </div>
            <div className="nav-right">
                <ul>
                    <li>Help</li>
                </ul>
                <button>Log In</button>
                <button>Sign Up</button>

            </div>
        </nav>
       </header>
    )
}

export default Navbar;