import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function header() {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><Link className="links" to='/fill'>Add new</Link></li>
                    <li><Link className="links" to='/contacts'>Contacts</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default header
