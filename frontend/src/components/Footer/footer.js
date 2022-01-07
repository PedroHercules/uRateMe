import React from 'react';

import './styles.css'

import Face from '../../assets/images/Facebook.png';
import Insta from '../../assets/images/Instagram.png';
import Twitter from '../../assets/images/Twitter.png';
import LinkedIn from '../../assets/images/LinkedIn.png';

export default function Footer() {
    return (
        <footer className="footer-container">
            <img src={Face} width="52" height="52" alt="Facebook"/>
            <img src={Insta} width="52" height="52" alt="Instagram" />
            <img src={Twitter} width="52" height="52" alt="Twitter" />
            <img src={LinkedIn} width="52" height="52" alt="LinkedIn" />
        </footer>
    );
}