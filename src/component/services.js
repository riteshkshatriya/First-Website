import React from 'react'
import Card from "./Card";
import web_design from '../images/services/web-design.png';
import software_development from '../images/services/software-development.png';
import e_commerce_website from '../images/services/e-commerce-website.png';
import ui_design from '../images/services/ui-design.png';


export default function services() {
    return (
        <section className="services-main-section bg-light">
            <div className="container">
                <div className="mb-5 text-center">
                    <h2 className="common-heading">Our Services</h2>
                </div>
                <div className="row no-gutters listing-services">
                  <Card value="Web Design" content="Lorem Ipsum 1" images={web_design} />
                  <Card value="Software Development" content="Lorem Ipsum 2" images={software_development} />
                  <Card value="E-Commerce Website" content="Lorem Ipsum 3" images={e_commerce_website} />
                  <Card value="UX/UX Designing" content="Lorem Ipsum 4" images={ui_design} />
                </div>
            </div>
        </section>
    )
}