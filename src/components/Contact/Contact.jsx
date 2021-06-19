import './Contact.css'
import React, { Fragment } from 'react'
import Header from '../Header/Header'
import FooterLink from '../FooterLink/FooterLink'
import contactVector from '../../assets/contact_anime.png'
import github from '../../assets/gh.png'
import linkedIn from '../../assets/li.png'
import web from '../../assets/web.png'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xbjqypyb");

    return (
        <div className="section-container">
            <Header
                heading="Let's Connect!"
                details="Wanna connect with me? Feel free to drop a message here!"
            />
            {/* Form section */}
            {state.succeeded ? <p style={{ color: "green", fontWeight: "bold" }}>Thanks for contacting me.. Will soon reach you out.</p>
                :
                <Fragment>
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit} >
                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Your Email Id..."
                            name="email"
                            name="email"
                            className="input-box email-input"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        {/* Email Body */}
                        <textarea
                            type="text"
                            placeholder="Your Message..."
                            id="message"
                            name="message"
                            className="input-box body-input"
                        >
                        </textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        {/* Submit Button */}
                        <button type="submit" className="contact-btn" disabled={state.submitting}>
                            Send Email
                        </button>
                    </form>
                </div>

                // {/* Social Icons */}
            <div className="social-icons-container">
                <a href="https://github.com/ravitejagullapudi" rel="noreferrer" target="_blank" className="social-icon">
                    <img src={github} alt="social" />
                </a>
                <a href="https://www.linkedin.com/in/venkataravitejagullapudi/" rel="noreferrer" target="_blank" className="social-icon">
                    <img src={linkedIn} alt="social" />
                </a>
                <a href="https://ravitejagullapudi.github.io" rel="noreferrer" target="_blank" className="social-icon">
                    <img src={web} alt="social" />
                </a>

            </div>
            </Fragment>
        }
            <FooterLink
                phrase="Read more "
                toAddress="/about"
                link="about me."
            />
            <div className="vector-frame">
                <img src={contactVector} alt="vector" className="about-vector" />
            </div>
        </div>
    )
}

export default Contact