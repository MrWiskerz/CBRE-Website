import React from 'react';
import './Footer.css';
import { FaBars, FaCog } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <FaBars className="footer-icon" />
                <p>Navigation</p>
            </div>
            <div className="footer-center">
                <p>&copy; {new Date().getFullYear()} <b>CBRE</b> All Rights Reserved.</p>
            </div>
            <div className="footer-right">
                <FaCog className="footer-icon" />
                <p>Settings</p>
            </div>
        </footer>
    );
}

export default Footer;
