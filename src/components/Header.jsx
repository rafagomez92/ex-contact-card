import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <Link to="/directory">Directory</Link>
            <Link to="/about">About</Link>
            <Link to="/">Login</Link>
        </nav>
    );
}

export default Header;