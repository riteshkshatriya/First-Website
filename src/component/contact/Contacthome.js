import React from 'react'
import Contactdetailshome from './Contactdetailshome'
import call from '../../images/contact/phone-call.png';
import mail from '../../images/contact/mail.png';
import Contactform from './Contactfrom';
import Button from '../Button';


export default function Contacthome() {
    return (
        <section className="bg-theme text-white contact-home-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className="row">
                            <Contactdetailshome mail1 = {"riteshkshatriya789@gmail.com"} mail2 = {"rp998486@gmail.com"} mailimages = {mail} number1="+91 8780715510" number2="+91 7048670134" images= {call} heading="Get response within 24 business hours" content="We want to learn more about your project and talk about how our services will work for you. Fill out the form below and we will get back to you within 24 business hours." />
                            <Contactform/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
