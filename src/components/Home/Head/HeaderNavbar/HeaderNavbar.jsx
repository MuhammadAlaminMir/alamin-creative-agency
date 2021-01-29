import React from 'react';
import logo from '../../../images/logos/logo-min.png';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './navbarStyle.css';
const HeaderNavbar = () => {
    return (
        <div className="container pt-3">
            <Navbar expand="md">
                <Navbar.Brand href="/home">
                    <img src={logo} height="50px" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="navLink ml-5 pt-2" to="/">
                            Home
                        </Link>

                        <Link className="navLink ml-5 pt-2" to="/">
                            Our Portfolio
                        </Link>

                        <Link className="navLink ml-5 pt-2" to="/">
                            Our Teem
                        </Link>

                        <Link className="navLink ml-5 pt-2" to="/">
                            Contact Us
                        </Link>

                        <Link className="navLink ml-5 text-center " to="/login">
                            <span id="btn">Login</span>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;
