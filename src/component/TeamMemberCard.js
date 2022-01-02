import React from 'react'

export default function TeamMemberCard(props) {
    return (
        <div className="col-lg-3">
            <div className="card text-center shadow border-0 custom-design-card rounded-0">
                <div className="team-member-image">
                    <img className="team-image" src= {props.images} />
                </div>
                <div className="card-body py-4">
                    <h4>{props.name}</h4>
                    <span class="text-muted">{props.designation}</span>
                </div>
            </div>
        </div>
    )
}
