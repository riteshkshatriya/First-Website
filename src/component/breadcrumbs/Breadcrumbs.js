import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
export default function Breadcrumbs(props) {
    return (
        <div className="bread-header py-5 bg-theme">
            <div className="py-5">
                <div className="container">
                    <h1 className="text-white pt-5">{props.name}</h1>
                    <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link className="text-white links link-unstyled" to="/">Home</Link></li>
                        <li class="breadcrumb-item text-muted active" aria-current="page">{props.name}</li>
                    </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}
