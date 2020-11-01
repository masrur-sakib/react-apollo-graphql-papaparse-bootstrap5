import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light text-light site-header">
                <div className="container-fluid">
                    <a className="navbar-brand site-title" href="/">
                        <h4>React Frontend Tasks</h4>
                    </a>
                </div>
            </nav>
        </div>
    );
};


export default Header;