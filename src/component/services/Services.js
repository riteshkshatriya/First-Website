import React from 'react'
import Heading from "../header";
import Card from "../Card";
import web_design from '../../images/services/web-design.png';

import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

export default function Services() {
    return (
        <div>
            <Heading />
            <Breadcrumbs name="Services" designation="Full Stack Web Developer" />
            <Card value="Web Design" content="Lorem Ipsum 1" images={web_design} />

        </div>
    )
}
