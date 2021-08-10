import React from 'react';
import './style.NavBar.css';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark"
                sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand>
                    Restaurant
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#about-us">About Us</Nav.Link>
                        <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default NavBar;