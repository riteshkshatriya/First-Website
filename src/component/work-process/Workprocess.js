import React from 'react'
import Workcard from './Workcard';
import Analyse from '../../images/work-start/data-analysis.png';
import Planning from '../../images/work-start/planning.png';
import Execution from '../../images/work-start/execution.png';
import Complete from '../../images/work-start/like.png';


export default function Workprocess() {
    return (
        <section className="work-process-section py-5">
            <div className="container">
                <div className="mb-5">
                    <h2 className="common-heading text-center">Check Out Our Work Process</h2>
                </div>
                <div class="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row">
                            <Workcard count= "1" heading="Analyse" content="We are client company and your portfolio." images={Analyse} />
                            <Workcard count= "2" heading="Planning" content="We are client company and your portfolio." images={Planning} />
                            <Workcard count= "3" heading="Execute" content="We are client company and your portfolio." images={Execution} />
                            <Workcard count= "4" heading="Complete" content="We are client company and your portfolio." images={Complete} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
