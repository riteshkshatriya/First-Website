import React from 'react'

export default function Skillscard(props) {
    return (
        <li className="skills-main mb-5">
            <img className="technology-data" src={props.images} />
        </li>
    )
}
