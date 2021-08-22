import React from 'react';
import './style.NavBar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    const auth = true;
    return (
        <nav className="navbar navbar-expand navbar-light bg-white py-2 fixed-top">
            <div className="container">
                <Link className="navbar-brand">
                    <img src="https://sarinahotel.com/images/logo.png" alt="Hot Onion Logo" />
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item active">
                        <Link to="/checkout" className="nav-link"><FontAwesomeIcon className="cart-icon" icon={faCartArrowDown} /><span className="badge bg-dark">5</span></Link>
                    </li>
                    <li className="nav-item">
                        login
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link">
                            <button className="btn btn-danger btn-rounded">Sign Up</button>
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default NavBar;