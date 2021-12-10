import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Personajes
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink
                            
                            className="nav-item nav-link"
                            exact="true"
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

