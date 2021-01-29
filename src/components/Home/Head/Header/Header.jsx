import React from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import './header.css';
const Header = () => {
    return (
        <div className="header">
            <HeaderNavbar />

            <HeaderContent />
        </div>
    );
};

export default Header;
