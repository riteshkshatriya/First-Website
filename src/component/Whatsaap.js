import React from 'react'
import whatsaap from '../images/whatsapp.png'

export default function Whatsaap() {
    return (
        <div className="fixed-whatsaap">
            <a href="https://api.whatsapp.com/send?phone=+918780715510" className='whatsaap-link'><img className='whatsaap-icon' src={whatsaap} /></a>
        </div>
    )
}
