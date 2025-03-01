import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Global.css"
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#")

    const navItems = [
        { name: "Home", href: "#" },
        { name: "Our Work", href: "#Service" },
        { name: "Blog", href: "#Blogs" },
        { name: "About", href: "#About" },
        { name: "Contact", href: "#Contact" },
    ];
    return (
        <div>

            {/* Main Navbar */}
            <nav className="navbar fixed-top navbar-expand-lg shadow bg-body-tertiary">
                <div className="container px-0">
                    {/* Logo */}
                    <a href="#" className="navbar-brand">
                        <img src="/img/Logo (1).png" className="Mainlogo p-1" alt="Logo" />
                    </a>

                    {/* Mobile Menu Button */}
                    <button className="navbar-toggler border-0 d-lg-none" onClick={() => setIsMobileOpen(true)}>
                        <FaBars size={24} />
                    </button>

                    {/* Desktop Navbar */}
                    <div className="collapse navbar-collapse justify-content-center  d-lg-flex">
                        <ul className="navbar-nav text-center fw-bold fs-6">
                            {navItems.map(({ name, href }) => (
                                <li className="nav-item" key={href}>
                                    <a
                                        className={`nav-link ${activeLink === href ? "#28C0E7" : "#28C0E7"}`}
                                        href={href}
                                        onClick={() => setActiveLink(href)}
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Desktop Get in Touch Button */}
                    <button type="button" className=" btn1  text-white d-none d-lg-block px-5 py-3">
                        Get in Touch
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar Menu */}
            <div className={`mobile-menu ${isMobileOpen ? "open" : ""} d-lg-none`}>
                <div className="menu-content">
                    {/* Close Button */}
                    <button className="close-btn" onClick={() => setIsMobileOpen(false)}>
                        <FaTimes size={24} />
                    </button>

                    {/* Navbar Links */}
                    <ul className=" nav flex-column  fw-bold fs-6">
                        <li className="nav-item"><a className="nav-link" href="#" onClick={() => setIsMobileOpen(false)}>Home</a></li><hr />
                        <li className="nav-item"><a className="nav-link" href="#Service" onClick={() => setIsMobileOpen(false)}>Our Work</a></li><hr />
                        <li className="nav-item"><a className="nav-link" href="#Blogs" onClick={() => setIsMobileOpen(false)}>Blog</a></li><hr />
                        <li className="nav-item"><a className="nav-link" href="#About" onClick={() => setIsMobileOpen(false)}>About</a></li><hr />
                        <li className="nav-item"><a className="nav-link" href="#Contact" onClick={() => setIsMobileOpen(false)}>Contact</a></li><hr />

                        {/* Get in Touch Button (Mobile Only) */}
                        <li className="nav-item  mt-3">
                            <button type="button" className="w-100 rounded-3 text-white" style={{ backgroundColor: "#28C0E7", border: "none" }}>
                                Get in Touch
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Overlay (Closes menu when clicking outside) */}
            {isMobileOpen && <div className="overlay d-lg-none" onClick={() => setIsMobileOpen(false)}></div>}

            {/* CSS Styling */}
            <style jsx>{`
              .mobile-menu {
                position: fixed;
                top: 0;
                right: -100%;
                width: 250px;
                height: 100vh;
                background: #fff;
                box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
                transition: right 0.3s ease-in-out;
                z-index: 1050;
              }
              .mobile-menu.open {
                right: 0;
              }
              .menu-content {
                padding: 20px;
              }
              .close-btn {
                border: none;
                background: transparent;
                display: block;
                margin-left: auto;
                margin-bottom: 10px;
              }
              .overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background: rgba(0, 0, 0, 0.5);
                z-index: 1049;
              }
            `}</style>
        </div>
    )
}

export default Header
