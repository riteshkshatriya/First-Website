import React from 'react'

export default function Contactdetailshome(props) {
    return (
        <div className="col-lg-6">
            <div className="contact-data">
                <h2 className="font-weight-bold mb-4">{props.heading}</h2>
                <p className="h5">{props.content}</p>
                <div className="contact-main-data pt-4">
                    <div class="d-flex align-items-center mb-4">
                        <div class="flex-shrink-0">
                            <div className="contact-main-icon">
                                <img class="contact-home-icon" src= {props.images} />
                            </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <div className="mb-2">
                                <a href="tel:8780715510" className="h5 text-white link-unstyled contact-links">{props.number1}</a>
                            </div>
                            <div className="mb-2">
                                <a href="tel:7048670134" className="h5 text-white link-unstyled contact-links">{props.number2}</a>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <div class="flex-shrink-0">
                            <div className="contact-main-icon">
                                <img class="contact-home-icon" src= {props.mailimages} />
                            </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <div className="mb-2">
                                <a href="mailto:riteshkshatriya789@gmail.com" className="h5 text-white link-unstyled contact-links">{props.mail1}</a>
                            </div>
                            <div className="mb-2">
                                <a href="mailto:rp998486@gmail.com" className="h5 text-white link-unstyled contact-links">{props.mail2}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
