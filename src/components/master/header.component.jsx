import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <nav className="cnav">
                        <div className="hamburger">
                            <i className="fas fa-bars"></i>
                        </div>
                      
                        <ul className="nav-ul">
                            <i className="fas fa-times close"></i>
                            <li><NavLink to="/" exact activeClassName="current" className="nav-link">Home</NavLink></li>
                            <li><NavLink to="/service" exact activeClassName="current" className="nav-link">Services</NavLink></li>
                            <li><NavLink to="/about" exact activeClassName="current" className="nav-link">About</NavLink></li>
                            <li><NavLink to="/vlog" exact activeClassName="current" className="nav-link">Vlogs</NavLink></li>
                            <li><NavLink to="/blog" exact activeClassName="current" className="nav-link">Blog</NavLink></li>
                            <li><NavLink to="/gallery" exact activeClassName="current" className="nav-link">Gallery</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
