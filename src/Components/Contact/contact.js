import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';




const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Sending email...");
    
        emailjs.sendForm('service_z2wmuxl', 'template_mqn08s1', form.current, 'L_rfannUTQ8h2pvrU')
            .then((result) => {
                console.log(result.text);
                // e.target.reset();
                alert('Email Sent !')
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
        };
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="client" className="clientImg" />
                    <img src={Adobe} alt="client" className="clientImg" />
                    <img src={Microsoft} alt="client" className="clientImg" />
                    <img src={Facebook} alt="client" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="ContactForm" ref={form} onSubmit={sendEmail}>
                    <div className="inputContainer">
                        <input type="text" className="name" placeholder='Your Name' name='user_name' />
                        <input type="email" className="email" placeholder='Your Email' name='user_email' />
                        <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    </div>
                    <div className="buttonContainer">
                        <button onClick={sendEmail} type='submit' value='Send' className="submitBtn">Submit</button>
                        <div className="links">
                            <img src={FacebookIcon} alt="Facebook" className="link" />
                            <img src={TwitterIcon} alt="Twitter" className="link" />
                            <img src={YouTubeIcon} alt="YouTube" className="link" />
                            <img src={InstagramIcon} alt="Instagram" className="link" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
    }

export default Contact
