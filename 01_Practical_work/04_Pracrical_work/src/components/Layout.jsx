import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className='Layout'>
            <header>
                <nav>
                    <ul className="Menu">
                        <p id="menu">Menu</p>
                        <li>
                            <p>👤</p>
                            <Link to="/biography">Biography</Link></li>
                        <li>
                            <p>🏆</p>
                            <Link to="/best work">Best Work</Link></li>
                        <li>
                            <p>🖼️</p>
                            <Link to="/works">Works</Link></li>
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