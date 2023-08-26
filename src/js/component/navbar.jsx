import React from 'react';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex collapse navbar-collapse justify-content-end" id="menu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                        <a className="nav-link text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="#">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;