import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContactForm from './components/Contact/ContactForm';
import Tips from './components/Tips/Tips';
import About from './components/About/About';
import 'tachyons';
import { HashRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Routes>
            <Route path="/tips" element={<Tips/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<ContactForm/>} />
            <Route path="/" element={<App/>} />
            
        </Routes>
    </HashRouter>
);

