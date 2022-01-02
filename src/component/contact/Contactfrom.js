import React from 'react'
import Button from '../Button'

export default function Contactform() {
    return (
        <div className="col-lg-6">
            <div className="contact-form">
                <div className="row">
                    <div className="col-lg-6 mb-2">
                        <div class="mb-3">
                            <input type="email" class="form-control custom-form-control" placeholder='Your Name*' id="name" name="name" />
                        </div>
                    </div>
                    <div className="col-lg-6 mb-2">
                        <div class="mb-3">
                            <input type="email" class="form-control custom-form-control" placeholder='Your Mobile No.*' id="name" name="name" />
                        </div>
                    </div>
                    <div className="col-lg-6 mb-2">
                        <div class="mb-3">
                            <input type="email" class="form-control custom-form-control" placeholder='Your Email Address*' id="name" name="name" />
                        </div>
                    </div>
                    <div className="col-lg-6 mb-2">
                        <div class="mb-3">
                            <select id="disabledSelect" class="form-select dropdown-select">
                                <option>Select Services</option>
                                <option>Website Design</option>
                                <option>E-Commerce Websites</option>
                                <option>Software Testing</option>
                                <option>Software Development (Admin Panel)</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-floating">
                            <textarea className="form-control textarea-control" placeholder="Leave a comment here"></textarea>
                            <label for="floatingTextarea2">Comments</label>
                        </div>
                    </div>
                    <div className='col-lg-12 pt-4'>
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    )
}
