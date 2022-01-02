import React from 'react'
import Searching_card from './Searching_card'
import website_seo_copywriting from '../images/searching/coding.png';
import custom_seo_reporting from '../images/searching/rocket.png';
import personalized_web_content from '../images/searching/write.png';
import bars from '../images/searching/bars.png';
import search from '../images/searching/searching.gif';

export default function Searching() {
    return (
    <section className="searching-main-section bg-light py-5">
        <div className="container">
            
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mb-5 ">
                                <h2 className="common-heading">Our Web Solutions Help Your Business Grow Online</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row cards-searching">
                            <Searching_card value="Website SEO Copywriting" images={website_seo_copywriting} />
                            <Searching_card value="Custom SEO Reporting" images={custom_seo_reporting} />
                            <Searching_card value="Personalized Web Content" images={personalized_web_content} />
                            <Searching_card value="Page Speed Optimization" images={bars} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-searching-image">
                                <img className="mb-3 w-100" src = {search} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
