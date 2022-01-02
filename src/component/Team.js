import React from 'react'
import Team_member_card from './TeamMemberCard'
import rohit from '../images/team/rohit.jpg';
import ritesh from '../images/team/ritesh.jpg';
import nirav from '../images/team/nirav.jpg';
import chintan from '../images/team/chintan.jpg';


export default function Team() {
    return (
        <section className="team-member-section">
            <div class="container">
                <div className="mb-5">
                    <h2 className="common-heading text-center text-white">Our Team Member</h2>
                </div>
                <div className="row">
                    <Team_member_card name="Rohit Prajapati" designation="Full Stack Web Developer" images = {rohit} />
                    <Team_member_card name="Ritesh Kshatriya" designation="Web Designer"  images = {ritesh} />
                    <Team_member_card name="Nirav Zalavadiya" designation="WordPress Developer"  images = {nirav} />
                    <Team_member_card name="Chintan Prajapati" designation="Frontend Developer"  images = {chintan} />
                </div>
            </div>
        </section>
    )
}
