import React from "react";
import ReactDOM from 'react-dom';
import  '../src/component/mystyle.css';
import Heading from "./component/header";
import Banner from "./component/banner";
import Services from "./component/services";
import Profile from "./component/profile";


const App =()=>{
    return(
        <div>
            <Heading />
            <Banner />
            <Services />
            <Profile />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
