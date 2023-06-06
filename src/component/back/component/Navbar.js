import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/admin"  className="nav-link">Anasayfa</Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="#" className="nav-link">İletişim</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar