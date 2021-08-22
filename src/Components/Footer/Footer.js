import React from 'react';
import { Link } from 'react-router-dom';
import './style.Footer.css';


const Footer = () => {
    return (
        <footer className="bg-black py-3">
            <div className="container">
                <div className="row footer-top py-5">
                    <div className="col-md-6 mb-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bb9ka2EXvK1ugj1pTQNlqDXyf8pSAWisVg&usqp=CAU" alt="logo" />
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li><Link to="/about">About Online Food</Link></li>
                            <li><Link to="/blog">Read Our Blog</Link></li>
                            <li><Link to="/login">Sign up to deliver</Link></li>
                            <li><Link to="/about">Add your restaurant</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li><Link to="/help">Get Help</Link></li>
                            <li><Link to="/faq">Privacy Policy</Link></li>
                            <li><Link to="/cities">Terms of Use</Link></li>
                            <li><Link to="/nearme">Privacy policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom d-flex justify-content-between align-items-center">
                    <small className="text-secondary">Copyright &copy;  2020 Online Food </small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;