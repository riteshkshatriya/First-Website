import React from 'react'

export default function Workcard(props) {
    return (
        <div className="work-part  col-lg-3">
            <div className="px-3">
                <div className="box-work card card-body border-0 shadow mb-4">
                    <img className="icon-process" src = {props.images} />
                </div>
                <div className="text-center">
                    <span className="counting">{props.count}</span>
                    <h4 className="pt-3">{props.heading}</h4>
                    <p className="text-muted">{props.content}</p>
                </div>
            </div>
        </div>
    )
}
