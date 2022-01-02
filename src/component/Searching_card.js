import React from 'react'

export default function Searching_card(props) {
    return (
        <div className="col-lg-5 searching-main-card">
            <div className="card card-body py-5 mb-4 border-0 shadow-lg custom-search-card active">
                <div className="card-image text-center">
                    <img className="icon-searching mb-3" src = {props.images} alt="" />
                    <h5 className="heading-searching-card">{props.value}</h5>
                </div>
            </div>
        </div>
    )
}
