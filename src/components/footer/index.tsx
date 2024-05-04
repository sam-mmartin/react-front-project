import React from 'react';
import NavFooter from './nav-footer';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className="footer footer-default">
            <div className="container">
                <NavFooter />
                <div className="copyright float-right">
                    &copy; {date}, made with <i className="material-icons">favorite</i> by &nbsp;
                    <a href="#" target="_blank">
                        Sam M. Martin
                    </a>
                    &nbsp; for a better web.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
