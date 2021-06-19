import './FooterLink.css'
import React from 'react'
import { Link } from 'react-router-dom'


const FooterLink = ({ phrase, link, toAddress }) => {
    return (
        <div className="footer-link">
            {phrase}
            <Link to={toAddress} className="footer-link-element">
                <span> {link}</span>
            </Link>
        </div>
    )
}

export default FooterLink