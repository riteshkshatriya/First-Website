import React from 'react'
import Skillscard from './Skillscard';
import react from '../images/skill/react.png';
import html from '../images/skill/html.png';
import vue from '../images/skill/vue.png';
import css from '../images/skill/css.png';
import codeigniter from '../images/skill/codeigniter.svg';
import js from '../images/skill/js.png';
import jquery from '../images/skill/jquery.webp';
import php from '../images/skill/php.png';
import bootstrap from '../images/skill/bootstrap.png';
import woocommerce from '../images/skill/woocommerce.png';
import wordpress from '../images/skill/wordpress.png';
import photoshop from '../images/skill/photoshop.png';
import illustrator from '../images/skill/illustrator.png';
import xd from '../images/skill/xd.png';

export default function Skills() {
    return (
        <section className="skills-section mb-5">
            <div className="container text-center">
                <div className="mb-5">
                    <h2 className="common-heading mb-4">Technology Knowledge And Skills</h2>
                </div>
                <ul className="flexible-girding justify-content-center link-unstyled">
                    <Skillscard images= {html} />
                    <Skillscard images= {css} />
                    <Skillscard images= {js} />
                    <Skillscard images= {react} />
                    <Skillscard images= {vue} />
                    <Skillscard images= {codeigniter} />
                    <Skillscard images= {jquery} />
                    <Skillscard images= {php} />
                    <Skillscard images= {bootstrap} />
                    <Skillscard images= {woocommerce} />
                    <Skillscard images= {wordpress} />
                    <Skillscard images= {photoshop} />
                    <Skillscard images= {illustrator} />
                    <Skillscard images= {xd} />
                </ul>
            </div>
        </section>
    )
}