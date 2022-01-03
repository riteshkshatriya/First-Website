import React from 'react'
import  '../component/mystyle.css';

import Heading from "./header";
import Banner from "./banner";
import Services from "./services";
import Searching from "./Searching";
import Skills from "./skills";
import Team from "./Team";
import Workprocess from './work-process/Workprocess';
import Contacthome from './contact/Contacthome';
import Whatsaap from './Whatsaap';
import Footer from './Footer';

export default function App() {
    return (
        <>
            <Heading />
            <Whatsaap />
            <Banner />
            <Services />
            <Skills />
            <Searching />
            {/* <Team /> */}
            <Workprocess />
            <Contacthome/>
            <Footer/>
        </>
    )
}
