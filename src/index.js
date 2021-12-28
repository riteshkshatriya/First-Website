import React from "react";
import ReactDOM from 'react-dom';
import  '../src/component/mystyle.css';
import Heading from "./component/header";
import Banner from "./component/banner";
import Profile from "./component/profile";


const App =()=>{
    return(
        <div>
            <Heading />
            <Banner />
            <Profile />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
