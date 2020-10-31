import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light text-light bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand site-title" href="/">
                        <h3>React Frontend Tasks</h3>
                    </a>
                </div>
            </nav>
        </div>
    );
};


export default Header;