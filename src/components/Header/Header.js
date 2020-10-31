import React from 'react';
import "./Header.css";
import siteLogo from "../../images/siteLogo.png";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Gain Solutions Tasks
                    </a>
                </div>
            </nav>
        </div>
    );
};


export default Header;