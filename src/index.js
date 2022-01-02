import React from "react";
import ReactDOM from 'react-dom';
import App from "./component/App";
import Contact from "./component/contact/Contact";


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from "./component/services/Services";


ReactDOM.render(
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        </Routes>
    </ BrowserRouter>
, document.querySelector('#root'))