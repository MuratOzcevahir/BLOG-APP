import React from 'react'
import { Link } from 'react-router-dom'

function MenuItem(prop) {
    return (
        <li className="nav-item">
            <Link to={prop.link} className="nav-link">{prop.title}</Link>
        </li>
    )
}

export default MenuItem