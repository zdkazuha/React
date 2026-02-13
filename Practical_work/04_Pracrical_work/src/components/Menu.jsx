import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function Menu() {
    return (
        <div className='Menu'>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/biography">Biography</Link></li>
                        <li><Link to="/best work">Best Work</Link></li>
                        <li><Link to="/works">Works</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2025 React App</p>
            </footer>
        </div>
    )
}