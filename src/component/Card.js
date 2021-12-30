import React from 'react'
import Button from "./Button";

export default function Card(props) {
    return (
        <div className="col-lg-3 services-main-card">
            <div className="services-card card card-body rounded-0 border-0">
                <div className="services-item text-center">
                    <img className="icon-services mb-4" src = {props.images} alt="" />
                    <h5 className="text-uppercase">{props.value}</h5>
                    {/* <p>{props.content}</p>   */}
                    {/* <Button /> */}
                </div>
            </div>
        </div>
    )
}
